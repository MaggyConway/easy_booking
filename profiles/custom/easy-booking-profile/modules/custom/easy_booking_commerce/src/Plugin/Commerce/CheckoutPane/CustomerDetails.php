<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\commerce_price\CurrencyFormatter;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Commerce pane for Customer Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "customer_details",
 *  label = @Translation("Customer details"),
 * )
 */
class CustomerDetails extends CheckoutPaneBase {

  /**
   * Currency formatter.
   *
   * @var \Drupal\commerce_price\CurrencyFormatter
   */
  protected $currencyFormatter;

  /**
   * CustomerDetails constructor.
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
      'title' => 'Enter your details',
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
    return parent::buildConfigurationForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);

    $data = $form_state->getValue($form['#parents']);

    $this->configuration['title'] = $data['title'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {

    $pane_form['customer_details'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'customer-details--wrapper',
        ],
      ],
    ];

    $pane_form['customer_details']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['title'],
      '#attributes' => [
        'class' => [
          'customer-details--title',
        ],
      ],
    ];

    $pane_form['customer_details']['items'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'customer-details--items',
        ],
      ],
    ];

    $pane_form['customer_details']['items']['first_name'] = [
      '#type' => 'textfield',
      '#tag' => 'input',
      '#placeholder' => $this->t('First name'),
      '#required' => TRUE,
      '#attributes' => [
        'class' => [
          'customer-details--item-first-name',
        ],
      ],
    ];

    $pane_form['customer_details']['items']['last_name'] = [
      '#type' => 'textfield',
      '#tag' => 'input',
      '#placeholder' => $this->t('Last name'),
      '#required' => TRUE,
      '#attributes' => [
        'class' => [
          'customer-details--item-last-name',
        ],
      ],
    ];
    $pane_form['customer_details']['items']['email'] = [
      '#type' => 'email',
      '#tag' => 'input',
      '#placeholder' => $this->t('Email address'),
      '#required' => TRUE,
      '#attributes' => [
        'class' => [
          'customer-details--item-email',
        ],
      ],
    ];
    $pane_form['customer_details']['items']['confirm_email'] = [
      '#type' => 'email',
      '#tag' => 'input',
      '#placeholder' => $this->t('Confirm email address'),
      '#required' => TRUE,
      '#attributes' => [
        'class' => [
          'customer-details--item-confirm-email',
        ],
      ],
    ];
    $pane_form['customer_details']['items']['note'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => t('We’ll send your booking confirmation to this email address.'),
    ];
    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function validatePaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $values = ($form_state->getValues())['customer_details']['customer_details']['items'];
    if ($values['email'] != $values['confirm_email']) {
      $form_state->setError($pane_form['customer_details']['items']['confirm_email'], $this->t('The specified emails do not match.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $customer = ($form_state->getValues())['customer_details']['customer_details']['items'];
    $this->order->setData('customer', $customer);
    $this->order->save();
    parent::submitPaneForm($pane_form, $form_state, $complete_form);
  }

}
