<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides the completion message pane.
 *
 * @CommerceCheckoutPane(
 *   id = "custom_completion_message",
 *   label = @Translation("Custom completion message"),
 *   default_step = "complete",
 * )
 */
class CustomCompletionMessage extends CheckoutPaneBase {

  /**
   * Current user service.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new CheckoutPaneBase object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowInterface $checkout_flow
   *   The parent checkout flow.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   Current user service.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, CheckoutFlowInterface $checkout_flow, EntityTypeManagerInterface $entity_type_manager, AccountProxyInterface $current_user) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $checkout_flow, $entity_type_manager);
    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition, CheckoutFlowInterface $checkout_flow = NULL) {
    /** @var \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager */
    $entity_type_manager = $container->get('entity_type.manager');
    /** @var \Drupal\Core\Session\AccountProxyInterface $current_user */
    $current_user = $container->get('current_user');
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $checkout_flow,
      $entity_type_manager,
      $current_user
    );
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'title' => 'Thank you. Your order has been received.',
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
      '#required' => TRUE,
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

    // $user_email = $this->currentUser->getEmail();
    $customer = $this->order->getData('customer');
    $user_email = $customer['email'];

    $pane_form['wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'completion-message',
        ],
      ],
    ];

    $pane_form['wrapper']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['title'],
      '#attributes' => [
        'class' => [
          'completion-message__title',
        ],
      ],
    ];

    $pane_form['wrapper']['list'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'list',
        ],
      ],
    ];

    $pane_form['wrapper']['list']['email'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#value' => $this->t("We've sent the confirmation email to @email", [
        '@email' => $user_email,
      ]),
      '#attributes' => [
        'class' => 'list__item',
      ],
    ];

    $pane_form['wrapper']['list']['info'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#value' => $this->t('Share your story and help other travellers book the perfect place.'),
      '#attributes' => [
        'class' => [
          'list__item',
        ],
      ],
    ];

    $pane_form['wrapper']['print'] = [
      '#type' => 'link',
      '#title' => $this->t('Print confirmation'),
      '#url' => Url::fromRoute('view.rooms.rooms_page'),
    ];

    return $pane_form;
  }

}
