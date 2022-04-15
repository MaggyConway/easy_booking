<?php

namespace Drupal\easy_booking_custom\Form;

use Drupal\bat_booking\Entity\Booking;
use Drupal\bat_event\Entity\Event;
use Drupal\bat_event\Entity\State;
use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Core\Form\FormBase;
use Drupal\node\NodeInterface;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Form\FormStateInterface;
use Drupal\commerce_cart\CartManagerInterface;
use Drupal\commerce_cart\CartProviderInterface;
use Drupal\commerce_order\OrderRefreshInterface;
use Drupal\commerce_store\CurrentStoreInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides the DailyReservationForm.
 *
 * @package Drupal\easy_booking_custom\Form
 */
class DailyReservationForm extends FormBase {

  /**
   * Commerce service to get store.
   *
   * @var \Drupal\commerce_store\CurrentStoreInterface
   */
  protected $currentStore;

  /**
   * Commerce cart provider service.
   *
   * @var \Drupal\commerce_cart\CartProviderInterface
   */
  protected $cartProvider;

  /**
   * Commerce cart manager service.
   *
   * @var \Drupal\commerce_cart\CartManagerInterface
   */
  protected $cartManager;

  /**
   * Entity manager service.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityManager;

  /**
   * Commerce order refresh service.
   *
   * @var \Drupal\commerce_order\OrderRefreshInterface
   */
  protected $orderRefresh;

  /**
   * DailyReservationForm constructor.
   *
   * @param \Drupal\commerce_store\CurrentStoreInterface $store
   *   The store.
   * @param \Drupal\commerce_cart\CartProviderInterface $cart_provider
   *   The cart provider.
   * @param \Drupal\commerce_cart\CartManagerInterface $cart_manager
   *   The cart manager.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_manager
   *   The entity manager.
   * @param \Drupal\commerce_order\OrderRefreshInterface $order_refresh
   *   The order refresh.
   */
  public function __construct(CurrentStoreInterface $store, CartProviderInterface $cart_provider, CartManagerInterface $cart_manager, EntityTypeManagerInterface $entity_manager, OrderRefreshInterface $order_refresh) {
    $this->currentStore = $store;
    $this->cartProvider = $cart_provider;
    $this->cartManager = $cart_manager;
    $this->entityManager = $entity_manager;
    $this->orderRefresh = $order_refresh;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    /** @var \Drupal\commerce_store\CurrentStoreInterface $current_store */
    $current_store = $container->get('commerce_store.current_store');
    /** @var \Drupal\commerce_cart\CartProviderInterface $cart_provider */
    $cart_provider = $container->get('commerce_cart.cart_provider');
    /** @var \Drupal\commerce_cart\CartManagerInterface $cart_manager */
    $cart_manager = $container->get('commerce_cart.cart_manager');
    /** @var \Drupal\Core\Entity\EntityTypeManagerInterface $entity_manager */
    $entity_manager = $container->get('entity_type.manager');
    /** @var \Drupal\commerce_order\OrderRefreshInterface $order_refresh */
    $order_refresh = $container->get('commerce_order.order_refresh');
    return new static(
      $current_store,
      $cart_provider,
      $cart_manager,
      $entity_manager,
      $order_refresh
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'easy_booking_custom_reservation_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, NodeInterface $node = NULL) {
    $adults = $node->get('field_adults_number')->getString();
    $children = $node->get('field_children_number')->getString();

    $start_date = new DrupalDateTime(date('Y-m-d H:00:00'));
    $start_date->modify('+1 hour');
    $end_date = (clone $start_date)->modify('+1 day');

    $form['node'] = [
      '#type' => 'hidden',
      '#value' => $node->id(),
    ];

    $form['reservation_form'] = [
      '#type' => 'container',
      '#weight' => -3,
      '#attributes' => [
        'class' => [
          'reservation_form--wrapper',
        ],
      ],
    ];

    $form['reservation_form']['dates_wrapper'] = [
      '#type' => 'container',
      '#weight' => 0,
      '#attributes' => [
        'class' => [
          'reservation-dates--wrapper',
        ],
      ],
    ];

    $form['reservation_form']['dates_wrapper']['start_date'] = [
      '#type' => 'datetime',
      '#title' => $this->t('From'),
      '#default_value' => $start_date,
      '#date_increment' => 3600,
      '#required' => TRUE,
      '#attributes' => [
        'min' => [
          $start_date->format('Y-m-d'),
        ],
      ],
    ];

    $form['reservation_form']['dates_wrapper']['end_date'] = [
      '#type' => 'datetime',
      '#title' => $this->t('To'),
      '#default_value' => $end_date,
      '#date_increment' => 3600,
      '#required' => TRUE,
      '#attributes' => [
        'min' => [
          $start_date->format('Y-m-d'),
        ],
      ],
    ];

    $form['reservation_form']['guests_wrapper'] = [
      '#type' => 'container',
      '#weight' => 0,
      '#attributes' => [
        'class' => [
          'reservation-guests--wrapper',
        ],
      ],
    ];

    $form['reservation_form']['guests_wrapper']['adults'] = [
      '#type' => 'number',
      '#title' => $this->t('Adults'),
      '#min' => 1,
      '#max' => $adults,
      '#default_value' => 1,
    ];

    $form['reservation_form']['guests_wrapper']['children'] = [
      '#type' => 'number',
      '#title' => $this->t('Children'),
      '#min' => 0,
      '#max' => $children,
      '#default_value' => 0,
    ];

    $form['reservation_form']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Book'),
      '#id' => 'book',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $node = Node::load($values['node']);

    $current_time = \Drupal::time()->getCurrentTime();

    // Validate persons quantity.
    $beds = $node->get('field_double_beds_number')
      ->getString() * 2 + $node->get('field_single_beds_number')->getString();
    $persons = $values['adults'] + $values['children'];
    if ($persons > $beds) {
      $form_state->setErrorByName('beds', "This room can only place $beds persons. There are not enough beds for $persons people.");
    }

    /** @var \Drupal\Core\Datetime\DrupalDateTime $start_date */
    $start_date = $values['start_date'];
    $end_date = $values['end_date'];

    if ($start_date->getTimestamp() < $current_time) {
      $form_state->setErrorByName('start_date', $this->t('You cannot book a room in the past.'));
      $dates_invalid = TRUE;
    }

    if (!$start_date instanceof DrupalDateTime) {
      $form_state->setErrorByName('start_date', $this->t('Check-in date is not valid.'));
      $dates_invalid = TRUE;
    }
    if (!$end_date instanceof DrupalDateTime) {
      $form_state->setErrorByName('end_date', $this->t('Check out date is not valid.'));
      $dates_invalid = TRUE;
    }

    if (isset($dates_invalid)) {
      return;
    }

    if ($end_date <= $start_date) {
      $form_state->setErrorByName('end_date', $this->t('Check out date must be after the check-in.'));
      return;
    }

    $available_units = $this->getAvailableUnits($values);
    if (empty($available_units)) {
      $form_state->setError($form, t('This room is unavailable, please try another room or choose different dates.'));
    }

    // Check if any items already in order.
    $store = $this->currentStore->getStore();
    $order = $this->cartProvider->getCart('default', $store);
    if (isset($order) && $order->hasItems()) {
      $response = new RedirectResponse(Url::fromRoute('commerce_checkout.form',
        ['commerce_order' => $order->id(), 'step' => 'order_information'])
        ->toString());
      $response->send();
      $this->messenger()
        ->addMessage('Please complete or discard your current order.', 'status', TRUE);
      exit;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $node = Node::load($values['node']);
    $start_date = $values['start_date'];
    $end_date = $values['end_date'];
    $adults = $values['adults'];
    $children = $values['children'];

    $start_date = new \DateTime($start_date->format('Y-m-d H:i'));
    $end_date = new \DateTime($end_date->format('Y-m-d H:i'));

    $booking = Booking::create([
      'type' => 'bee',
      'label' => $node->label(),
    ]);
    $booking->set('booking_start_date', $start_date->format('Y-m-d\TH:i:s'))
      ->set('booking_end_date', $end_date->format('Y-m-d\TH:i:s'))
      ->set('field_adults_number', $adults)
      ->set('field_children_number', $children)
      ->set('field_room', $node->id())
      ->save();

    /** @var \Drupal\commerce_product\Entity\Product $product */
    $product = $node->get('field_product')->entity;

    $store = $this->currentStore->getStore();

    $variations = $product->getVariations();
    $product_variation = reset($variations);

    /** @var \Drupal\commerce_order\Entity\Order $cart */
    $cart = $this->cartProvider->getCart('rooms_order', $store);
    if (!$cart) {
      $cart = $this->cartProvider->createCart('rooms_order', $store);
    }
    elseif ($this->currentUser()->isAnonymous()) {
      $this->cartManager->emptyCart($cart, FALSE);
    }

    $interval = $start_date->diff($end_date);

    $hours = ($interval->days * 24) + $interval->h;
    $quantity = $hours;

    /** @var \Drupal\commerce_order\Entity\OrderItemInterface $order_item */
    $order_item = $this->entityManager
      ->getStorage('commerce_order_item')
      ->create([
        'title' => $node->label(),
        'type' => 'bee',
        'purchased_entity' => $product_variation->id(),
        'quantity' => $quantity,
        'unit_price' => $product_variation->getPrice(),
      ]);
    $order_item->set('field_booking', $booking)
      ->set('field_node', $node)
      ->save();

    $this->cartManager->addOrderItem($cart, $order_item, FALSE);

    $event_type = 'availability_hourly';

    $booked_state = State::loadByMachineName('bee_hourly_booked');

    $event = Event::create(['type' => $event_type]);
    $event_dates = [
      'value' => $start_date->format('Y-m-d\TH:i:00'),
      'end_value' => $end_date->format('Y-m-d\TH:i:00'),
    ];
    $event->set('event_dates', $event_dates)
      ->set('event_state_reference', $booked_state->id());

    $available_units = $this->getAvailableUnits($values);

    $available_units_count = count($available_units);
    $time_count = 0;
    // Search for closest room in 48 hours/days.
    while (count($available_units) == $available_units_count && $time_count < 48) {
      $values['end_date'] = $values['start_date'];
      $start_date = new DrupalDateTime($values['start_date']);
      $values['start_date'] = $start_date->modify('-1 hour')
        ->format('Y-m-d\TH:i:00');
      $past_available_units = $this->getAvailableUnits($values);
      $past_available_units_count = count($past_available_units);

      if (!$past_available_units_count) {
        break;
      }

      if ($past_available_units_count < count($available_units)) {
        $available_units = array_diff_key($available_units, $past_available_units);
      }
      $time_count += 1;
    }

    $event->set('event_bat_unit_reference', reset($available_units));
    $event->save();

    $booking->set('booking_event_reference', $event);
    $booking->save();

    $this->orderRefresh->refresh($cart);
    $cart->recalculateTotalPrice();
    $cart->save();

    $form_state->setRedirect('commerce_checkout.form', ['commerce_order' => $cart->id()]);
  }

  /**
   * Get available Units.
   *
   * @param array $values
   *   FormState values.
   *
   * @return array
   *   Available units.
   *
   * @throws \Exception
   */
  protected function getAvailableUnits(array $values) {
    $node = Node::load($values['node']);
    $start_date = $values['start_date'];
    $end_date = $values['end_date'];

    $bee_settings = $this->configFactory()
      ->getEditable('node.type.room')
      ->get('bee');

    $units_ids = [];
    foreach ($node->get('field_availability_hourly') as $unit) {
      $units_ids[] = $unit->entity->id();
    }

    $start_date = new \DateTime($start_date);
    $end_date = new \DateTime($end_date);
    $end_date->sub(new \DateInterval('PT1M'));

    $available_units_ids = bat_event_get_matching_units($start_date, $end_date, ['bee_hourly_available'], $bee_settings['type_id'], 'availability_hourly');

    return array_intersect($units_ids, $available_units_ids);
  }

}
