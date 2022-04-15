<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;
use Drupal\media\Entity\Media;
use Drupal\image\Entity\ImageStyle;

/**
 * Commerce pane for Order Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "payment_details",
 *  label = @Translation("Payment details"),
 * )
 */
class PaymentDetails extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function isVisible() {
    /** @var Drupal\Core\Routing\RouteMatchInterface $current_route_match */
    $current_route_match = \Drupal::service('current_route_match');
    $current_step = $current_route_match->getParameter('step');

    return $current_step == 'complete';
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'additional_text' => NULL,
      'cards_icons' => NULL,
      'cards_label' => 'This property accepts the following forms of payment',
      'title' => 'Your payment details',
      'text' => NULL,
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

    $form['text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Text'),
      '#required' => TRUE,
      '#default_value' => $this->configuration['text'],
      '#resizable' => 'none',
      '#attributes' => [
        'placeholder' => $this->t('Enter text'),
      ],
    ];

    $form['cards'] = [
      '#type' => 'details',
      '#title' => $this->t('Cards'),
      '#open' => TRUE,
    ];

    $form['cards']['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label for list of credit cards'),
      '#placeholder' => $this->t('Enter the label for list of credit cards'),
      '#required' => TRUE,
      '#default_value' => $this->configuration['cards_label'] ?? NULL,
    ];

    $form['cards']['icons'] = [
      '#type' => 'media_library',
      '#title' => $this->t('Card icons'),
      '#description' => $this->t('Upload credit card icons'),
      '#allowed_bundles' => ['image'],
      '#cardinality' => -1,
    ];

    $form['additional_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Additional text (optional)'),
      '#required' => FALSE,
      '#default_value' => $this->configuration['additional_text'],
      '#resizeable' => 'none',
      '#attributes' => [
        'placeholder' => $this->t('Enter additional text'),
      ],
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
    $this->configuration['text'] = $data['text'] ?? '';
    $this->configuration['cards_label'] = $data['cards']['label'];
    $this->configuration['cards'] = $data['cards']['icons'];
    $this->configuration['additional_text'] = $data['additional_text'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $card_ids = explode(',', $this->configuration['cards']);

    $pane_form['wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'payment-details',
        ],
      ],
    ];

    $pane_form['wrapper']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['title'],
      '#attributes' => [
        'class' => [
          'payment-details__title',
        ],
      ],
    ];

    $pane_form['wrapper']['text'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#value' => $this->configuration['text'],
      '#attributes' => [
        'class' => [
          'payment-details__text',
        ],
      ],
    ];

    $pane_form['wrapper']['cards'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'cards',
        ],
      ],
    ];

    $pane_form['wrapper']['cards']['label'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#value' => $this->configuration['cards_label'] . ':',
      '#attributes' => [
        'class' => [
          'cards__label',
        ],
      ],
    ];

    foreach ($card_ids as $card_id) {

      $icon_media = Media::load($card_id);

      if ($icon_media) {
        /** @var \Drupal\file\Entity\File $icon_file */
        $icon_file = File::load($icon_media->get('field_media_image')->target_id);
        $icon_file_url = ImageStyle::load('payment_cards_final_step_50_x_32')->buildUrl($icon_file->getFileUri());

        $pane_form['wrapper']['cards'][$card_id] = [
          '#type' => 'html_tag',
          '#tag' => 'img',
          '#attributes' => [
            'src' => $icon_file_url,
            'style' => 'width: 25%',
            'class' => [
              'cards__img',
            ],
          ],
        ];
      }
    }

    if ($additional_text = $this->configuration['additional_text']) {
      $pane_form['wrapper']['additional_text'] = [
        '#type' => 'html_tag',
        '#tag' => 'div',
        '#value' => $additional_text,
        '#attributes' => [
          'class' => [
            'payment-details__additional-text',
          ],
        ],
      ];
    }

    return $pane_form;
  }

}
