<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\commerce_price\CurrencyFormatter;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Commerce pane for Order Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "order_details",
 *  label = @Translation("Order details"),
 * )
 */
class OrderDetails extends CheckoutPaneBase {

  /**
   * Currency formatter.
   *
   * @var \Drupal\commerce_price\CurrencyFormatter
   */
  protected $currencyFormatter;

  /**
   * OrderDetails constructor.
   *
   * @param array $configuration
   *   The configuration.
   * @param string $plugin_id
   *   The plugin id.
   * @param mixed $plugin_definition
   *   The plugin definition.
   * @param \Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowInterface $checkout_flow
   *   The checkout flow.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\commerce_price\CurrencyFormatter $currency_formatter
   *   The currency formatter.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, CheckoutFlowInterface $checkout_flow, EntityTypeManagerInterface $entity_type_manager, CurrencyFormatter $currency_formatter) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $checkout_flow, $entity_type_manager);

    $this->currencyFormatter = $currency_formatter;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition, CheckoutFlowInterface $checkout_flow = NULL) {
    /** @var \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager */
    $entity_type_manager = $container->get('entity_type.manager');
    /** @var \Drupal\commerce_price\CurrencyFormatter $currency_formatter */
    $currency_formatter = $container->get('commerce_price.currency_formatter');
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $checkout_flow,
      $entity_type_manager,
      $currency_formatter
    );
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'title' => 'Check your details',
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title'),
      '#placeholder' => $this->t('Enter title'),
      '#default_value' => $this->configuration['title'],
    ];

    $form['footnote'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Footnote'),
      '#default_value' => $this->configuration['footnote'],
      '#attributes' => [
        'placeholder' => $this->t('Enter footnote'),
      ],
    ];

    $form['additional_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Additional text'),
      '#placeholder' => $this->t('Enter additional text'),
      '#default_value' => $this->configuration['additional_text'],
    ];

    return parent::buildConfigurationForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);

    $data = $form_state->getValue($form['#parents']);

    $this->configuration['title'] = $data['title'];
    $this->configuration['footnote'] = $data['footnote'];
    $this->configuration['additional_text'] = $data['additional_text'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {

    $customer = $this->order->getData('customer');
    $user_email = $customer['email'];
    $order_id = $this->order->id();

    $order_items = $this->order->getItems();

    $total_guests = 0;

    $check_in = NULL;
    $check_out = NULL;

    $rooms_price = NULL;

    $total_price_number = 0;
    $total_price_currency_code = $order_items[0]->getTotalPrice()
      ->getCurrencyCode();

    /** @var \Drupal\commerce_order\Entity\OrderItemInterface $order_item */
    foreach ($order_items as $order_item) {
      /** @var \Drupal\node\Entity\Node $node */
      $node = $order_item->get('field_node')->entity;
      /** @var \Drupal\bat_booking\Entity\Booking $booking */
      $booking = $order_item->get('field_booking')->entity;

      $adults = $node->get('field_adults_number')->value;
      $children = $node->get('field_children_number')->value;

      $total_guests += $adults + $children;

      $booking_start_date = new \DateTime($booking->get('booking_start_date')->value);
      $booking_end_date = new \DateTime($booking->get('booking_end_date')->value);

      if (!$check_in && !$check_out) {
        $check_in = $booking_start_date;
        $check_out = $booking_end_date;
      }
      else {
        $check_in = $booking_start_date < $check_in ? $booking_start_date : $check_in;
        $check_out = $booking_end_date > $check_out ? $booking_end_date : $check_out;
      }

      $price_number = (double) $order_item->getTotalPrice()
        ->getNumber();

      $total_price_number += $price_number;
    }

    $check_in = $check_in->format('l j F Y');
    $check_out = $check_out->format('l j F Y');

    $rooms_price = $this->currencyFormatter->format(
      (string) $total_price_number,
      $total_price_currency_code
    );

    $items = [
      'Booked' => $user_email,
      'Confirmation number' => $order_id,
      'Total guests' => $total_guests,
      'Check-in' => $check_in,
      'Check-out' => $check_out,
      'Rooms' => $rooms_price,
    ];

    $pane_form['order_details'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'order-details',
        ],
      ],
    ];

    $pane_form['order_details']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['title'],
      '#attributes' => [
        'class' => [
          'order-details__title',
        ],
      ],
    ];

    $pane_form['order_details']['items'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'order-details__items',
        ],
      ],
    ];

    $index = 0;

    foreach ($items as $name => $value) {
      $pane_form['order_details']['items']['item' . $index++] = [
        '#type' => 'container',
        '#attributes' => [
          'class' => [
            'order-details__item',
          ],
        ],
        'name' => [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#value' => $name,
          '#attributes' => [
            'class' => [
              'order-details__item__name',
            ],
            'style' => 'font-weight: bold',
          ],
        ],
        'value' => [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#value' => $value,
          '#attributes' => [
            'class' => [
              'order-details__item__value',
            ],
          ],
        ],
      ];
    }

    $pane_form['order_details']['order_total'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'order-details__order-total',
        ],
      ],
      'price' => [
        '#type' => 'container',
        '#attributes' => [
          'class' => [
            'order-details__order-total__price',
          ],
          'style' => 'font-weight: bold',
        ],
        'label' => [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#value' => $this->t('Total price'),
          '#attributes' => [
            'class' => [
              'order-details__order-total__price__label',
            ],
          ],
        ],
        'value' => [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#value' => $rooms_price . ' *',
          '#attributes' => [
            'class' => [
              'order-details__order-total__price__value',
            ],
          ],
        ],
        'footnote' => [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#value' => $this->configuration['footnote'],
          '#attributes' => [
            'class' => [
              'order-details__order-total__price__footnote',
            ],
            'style' => 'font-weight: normal',
          ],
        ],
      ],
      'additional_text' => [
        '#type' => 'html_tag',
        '#tag' => 'div',
        '#value' => $this->configuration['additional_text'],
        '#attributes' => [
          'class' => [
            'order-details__order-total__additional-text',
          ],
        ],
      ],
    ];

    return $pane_form;
  }

}
