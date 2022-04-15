<?php

namespace Drupal\easy_booking_commerce\Form;

use Drupal\bat_booking\Entity\Booking;
use Drupal\commerce_cart\CartManagerInterface;
use Drupal\commerce_cart\CartProviderInterface;
use Drupal\commerce_order\OrderRefreshInterface;
use Drupal\commerce_price\CurrencyFormatter;
use Drupal\commerce_store\CurrentStoreInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provide the CustomCartForm.
 *
 * @package Drupal\easy_booking_commerce\Form
 */
class CustomCartForm extends FormBase {

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
   * Commerce price currency formatter.
   *
   * @var \Drupal\commerce_price\CurrencyFormatter
   */
  protected $currencyFormatter;

  /**
   * {@inheritdoc}
   */
  public function __construct(CurrentStoreInterface $store, CartProviderInterface $cart_provider, CartManagerInterface $cart_manager, EntityTypeManagerInterface $entity_manager, OrderRefreshInterface $order_refresh, CurrencyFormatter $currency_formatter) {
    $this->currentStore = $store;
    $this->cartProvider = $cart_provider;
    $this->cartManager = $cart_manager;
    $this->entityManager = $entity_manager;
    $this->orderRefresh = $order_refresh;
    $this->currencyFormatter = $currency_formatter;
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
    /** @var \Drupal\commerce_price\CurrencyFormatter $currency_formatter */
    $currency_formatter = $container->get('commerce_price.currency_formatter');
    return new static(
      $current_store,
      $cart_provider,
      $cart_manager,
      $entity_manager,
      $order_refresh,
      $currency_formatter
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'custom_cart_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $order_type = 'rooms_order';

    /** @var \Drupal\commerce_store\Entity\Store $store */
    $store = $this->currentStore->getStore();
    /** @var \Drupal\commerce_order\Entity\Order $cart */
    $cart = $this->cartProvider->getCart($order_type, $store);

    if (empty($cart)) {
      return [];
    }

    $cart_items = $cart->getItems();

    if (count($cart_items) == 0) {
      return [];
    }

    $total_price_number = $cart->total_price->number;
    $total_price_currency_code = $cart->total_price->currency_code;

    $total_price = $this->currencyFormatter
      ->format($total_price_number, $total_price_currency_code);

    $rooms_count = count($cart_items);
    $nights_count = 0;

    // Calculating nights.
    foreach ($cart_items as $cart_item) {
      $booking = Booking::load($cart_item->field_booking->target_id);

      $start_date = new \DateTime($booking->booking_start_date->value);
      $end_date = new \DateTime($booking->booking_end_date->value);

      $nights_count += date_diff($start_date, $end_date)->days ?? 0;
    }

    $form['cart'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'cart-info',
        ],
      ],
    ];

    $form['cart']['rooms_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'rooms-info',
        ],
      ],
    ];

    $form['cart']['rooms_wrapper']['rooms'] = [
      '#type' => 'markup',
      '#markup' => $this->t('@rooms rooms, @nights night stay |', [
        '@rooms' => $rooms_count,
        '@nights' => $nights_count,
      ]),
    ];

    $form['cart']['total_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'total-price',
        ],
      ],
    ];

    $form['cart']['total_wrapper']['total'] = [
      '#type' => 'markup',
      '#markup' => $this->t('@total', [
        '@total' => $total_price,
      ]),
    ];

    $form['cart']['button_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'checkout-button-wrapper',
        ],
      ],
    ];

    $form['cart']['button_wrapper']['checkout'] = [
      '#type' => 'submit',
      '#value' => $this->t("I'll reserve"),
      '#cart' => $cart,
      '#submit' => [
        '::checkout',
      ],
      '#attributes' => [
        'class' => [
          'checkout-button',
        ],
      ],
    ];

    $form['clear_button'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'cart-button',
        ],
      ],
    ];

    $form['clear_button']['clear'] = [
      '#type' => 'submit',
      '#value' => $this->t('Clear selection'),
      '#cart' => $cart,
      '#submit' => [
        '::clearSelection',
      ],
      '#attributes' => [
        'class' => [
          'clear-button',
        ],
      ],
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
  }

  /**
   * Checkout button handler.
   *
   * @param array $form
   *   The form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state.
   */
  public function checkout(array $form, FormStateInterface &$form_state) {
    $cart = $form_state->getTriggeringElement()['#cart'];
    $parameters = [
      'commerce_order' => $cart->id(),
    ];
    $form_state->setRedirect('commerce_checkout.form', $parameters);
  }

  /**
   * Clear button handler.
   *
   * @param array $form
   *   The form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state.
   */
  public function clearSelection(array &$form, FormStateInterface $form_state) {
    $cart = $form_state->getTriggeringElement()['#cart'];

    $this->cartManager->emptyCart($cart);
  }

}
