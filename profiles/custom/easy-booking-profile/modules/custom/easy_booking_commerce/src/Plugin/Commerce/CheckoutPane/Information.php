<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Commerce pane for Order Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "information",
 *  label = @Translation("Information"),
 * )
 */
class Information extends CheckoutPaneBase {

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
  public function getConfiguration() {
    return [
      'title' => 'Important information',
      'label' => 'Getting to the resort',
    ] + parent::getConfiguration();
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

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#placeholder' => $this->t('Enter label'),
      '#required' => TRUE,
      '#default_value' => $this->configuration['label'],
    ];

    $form['text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Text after label'),
      '#required' => TRUE,
      '#resizable' => 'none',
      '#default_value' => $this->configuration['text'],
      '#attributes' => [
        'placeholder' => $this->t('Enter text'),
      ],
    ];

    $form['additional_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Additional text'),
      '#required' => FALSE,
      '#resizable' => 'none',
      '#default_value' => $this->configuration['additional_text'],
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
    $this->configuration['label'] = $data['label'];
    $this->configuration['text'] = $data['text'];
    $this->configuration['additional_text'] = $data['additional_text'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['wrapper'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#attributes' => [
        'class' => [
          'information',
        ],
      ],
    ];

    $pane_form['wrapper']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['title'],
      '#attributes' => [
        'class' => [
          'information__title',
        ],
      ],
    ];

    $pane_form['wrapper']['label'] = [
      '#type' => 'html_tag',
      '#tag' => 'h3',
      '#value' => $this->configuration['label'] . ':',
      '#attributes' => [
        'class' => [
          'information__label',
        ],
      ],
    ];

    $pane_form['wrapper']['text'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => $this->configuration['text'],
      '#attributes' => [
        'class' => [
          'information__text',
        ],
      ],
    ];

    if ($additional_text = $this->configuration['additional_text']) {
      $pane_form['wrapper']['additional_text'] = [
        '#type' => 'html_tag',
        '#tag' => 'p',
        '#value' => $additional_text,
        '#attributes' => [
          'class' => [
            'information__additional-text',
          ],
        ],
      ];
    }

    return $pane_form;
  }

}
