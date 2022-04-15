<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\commerce_price\CurrencyFormatter;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\file\Entity\File;
use Drupal\media\Entity\Media;
use Drupal\image\Entity\ImageStyle;

/**
 * Commerce pane for Customer Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "advantages",
 *  label = @Translation("Advantages"),
 * )
 */
class Advantages extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function isVisible() {
    /** @var Drupal\Core\Routing\RouteMatchInterface $current_route_match */
    $current_route_match = \Drupal::service('current_route_match');
    $current_step = $current_route_match->getParameter('step');
    if ($current_step === 'order_information' or $current_step === 'payment' or $current_step === 'payment_process') {
      return TRUE;
    }
    else {
      return FALSE;
    };
  }

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
  public function getConfiguration() {
    return $this->configuration;
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'block_title' => '3 reasons to book directly with us',

      'first_item_title' => 'Low rates',
      'first_item_text' => 'Pay the price you see - no hidden costs.',
      'first_item_icon' => NULL,

      'second_item_title' => 'Instant confirmation',
      'second_item_text' => 'No stress on arrival. Your reservation is guaranteed.',
      'second_item_icon' => NULL,

      'third_item_title' => 'Secure booking',
      'third_item_text' => 'We take your privacy seriously.',
      'third_item_icon' => NULL,
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['block_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Block title'),
      '#placeholder' => $this->t('Enter block title'),
      '#default_value' => $this->configuration['block_title'],
    ];

    // First item.
    $form['first_item_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('First item title'),
      '#placeholder' => $this->t('Enter first item title'),
      '#default_value' => $this->configuration['first_item_title'],
    ];
    $form['first_item_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('First item text'),
      '#placeholder' => $this->t('Enter first item text'),
      '#default_value' => $this->configuration['first_item_text'],
    ];
    $form['first_item_icon'] = [
      '#type' => 'media_library',
      '#allowed_bundles' => ['image'],
      '#title' => $this->t('First item icon'),
      '#description' => t('Upload or select first item image.'),
      '#default_value' => $this->configuration['first_item_icon'],
    ];

    // Second item.
    $form['second_item_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Second item title'),
      '#placeholder' => $this->t('Enter second item title'),
      '#default_value' => $this->configuration['second_item_title'],
    ];
    $form['second_item_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Second item text'),
      '#placeholder' => $this->t('Enter second item text'),
      '#default_value' => $this->configuration['second_item_text'],
    ];
    $form['second_item_icon'] = [
      '#type' => 'media_library',
      '#allowed_bundles' => ['image'],
      '#title' => $this->t('Second item icon'),
      '#description' => t('Upload or select second item image.'),
      '#default_value' => $this->configuration['second_item_icon'],
    ];

    // Third item.
    $form['third_item_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Third item title'),
      '#placeholder' => $this->t('Enter third item title'),
      '#default_value' => $this->configuration['third_item_title'],
    ];
    $form['third_item_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Third item text'),
      '#placeholder' => $this->t('Enter third item text'),
      '#default_value' => $this->configuration['third_item_text'],
    ];
    $form['third_item_icon'] = [
      '#type' => 'media_library',
      '#allowed_bundles' => ['image'],
      '#title' => $this->t('Third item icon'),
      '#description' => t('Upload or select third item image.'),
      '#default_value' => $this->configuration['third_item_icon'],
    ];

    return parent::buildConfigurationForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);

    $data = $form_state->getValue($form['#parents']);

    $this->configuration['block_title'] = $data['block_title'];

    $this->configuration['first_item_title'] = $data['first_item_title'];
    $this->configuration['first_item_text'] = $data['first_item_text'];
    $this->configuration['first_item_icon'] = $data['first_item_icon'];

    $this->configuration['second_item_title'] = $data['second_item_title'];
    $this->configuration['second_item_text'] = $data['second_item_text'];
    $this->configuration['second_item_icon'] = $data['second_item_icon'];

    $this->configuration['third_item_title'] = $data['third_item_title'];
    $this->configuration['third_item_text'] = $data['third_item_text'];
    $this->configuration['third_item_icon'] = $data['third_item_icon'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    /** @var \Drupal\file\Entity\File $icon */
    $first_icon_id = $this->configuration['first_item_icon'];
    $second_icon_id = $this->configuration['second_item_icon'];
    $third_icon_id = $this->configuration['third_item_icon'];

    $first_icon = Media::load($first_icon_id);
    $second_icon = Media::load($second_icon_id);
    $third_icon = Media::load($third_icon_id);

    $first_fid = $first_icon->field_media_image->target_id;
    $second_fid = $second_icon->field_media_image->target_id;
    $third_fid = $third_icon->field_media_image->target_id;

    $first_icon = File::load($first_fid);
    $second_icon = File::load($second_fid);
    $third_icon = File::load($third_fid);

    $first_icon_url = $first_icon->getFileUri();
    $second_icon_url = $second_icon->getFileUri();
    $third_icon_url = $third_icon->getFileUri();

    $first_icon_styled_url = ImageStyle::load('checkout_advantages_thumbnail_20x20')->buildUrl($first_icon_url);
    $second_icon_styled_url = ImageStyle::load('checkout_advantages_thumbnail_20x20')->buildUrl($second_icon_url);
    $third_icon_styled_url = ImageStyle::load('checkout_advantages_thumbnail_20x20')->buildUrl($third_icon_url);

    $pane_form['advantages'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantages--wrapper',
        ],
      ],
    ];

    $pane_form['advantages']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['block_title'],
      '#attributes' => [
        'class' => [
          'advantages--title',
        ],
      ],
    ];

    $pane_form['advantages']['items'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'items--wrapper',
        ],
      ],
    ];

    // First item.
    $pane_form['advantages']['items']['first_item'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantage-item--wrapper',
        ],
      ],
    ];
    $pane_form['advantages']['items']['first_item'][0] = [
      '#type' => 'html_tag',
      '#tag' => 'img',
      '#attributes' => [
        'class' => [
          'advantage-item--icon',
        ],
        'src' => $first_icon_styled_url,
      ],
    ];
    $pane_form['advantages']['items']['first_item'][1] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantage-text--wrapper',
        ],
      ],
    ];
    $pane_form['advantages']['items']['first_item'][1][] = [
      '#type' => 'html_tag',
      '#tag' => 'h3',
      '#value' => $this->configuration['first_item_title'],
      '#attributes' => [
        'class' => [
          'advantage-item--title',
        ],
      ],
    ];
    $pane_form['advantages']['items']['first_item'][1][] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => $this->configuration['first_item_text'],
      '#attributes' => [
        'class' => [
          'advantage-item--text',
        ],
      ],
    ];

    // Second item.
    $pane_form['advantages']['items']['second_item'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantage-item--wrapper',
        ],
      ],
    ];
    $pane_form['advantages']['items']['second_item'][0] = [
      '#type' => 'html_tag',
      '#tag' => 'img',
      '#attributes' => [
        'class' => [
          'advantage-item--icon',
        ],
        'src' => $second_icon_styled_url,
      ],
    ];
    $pane_form['advantages']['items']['second_item'][1] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantage-text--wrapper',
        ],
      ],
    ];
    $pane_form['advantages']['items']['second_item'][1][] = [
      '#type' => 'html_tag',
      '#tag' => 'h3',
      '#value' => $this->configuration['second_item_title'],
      '#attributes' => [
        'class' => [
          'advantage-item--title',
        ],
      ],
    ];
    $pane_form['advantages']['items']['second_item'][1][] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => $this->configuration['second_item_text'],
      '#attributes' => [
        'class' => [
          'advantage-item--text',
        ],
      ],
    ];

    // Third item.
    $pane_form['advantages']['items']['third_item'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantage-item--wrapper',
        ],
      ],
    ];
    $pane_form['advantages']['items']['third_item'][0] = [
      '#type' => 'html_tag',
      '#tag' => 'img',
      '#attributes' => [
        'class' => [
          'advantage-item--icon',
        ],
        'src' => $third_icon_styled_url,
      ],
    ];
    $pane_form['advantages']['items']['third_item'][1] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'advantage-text--wrapper',
        ],
      ],
    ];
    $pane_form['advantages']['items']['third_item'][1][] = [
      '#type' => 'html_tag',
      '#tag' => 'h3',
      '#value' => $this->configuration['third_item_title'],
      '#attributes' => [
        'class' => [
          'advantage-item--title',
        ],
      ],
    ];
    $pane_form['advantages']['items']['third_item'][1][] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => $this->configuration['third_item_text'],
      '#attributes' => [
        'class' => [
          'advantage-item--text',
        ],
      ],
    ];

    return $pane_form;
  }

}
