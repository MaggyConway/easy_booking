<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Commerce pane for Order Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "reasons",
 *  label = @Translation("Reasons"),
 * )
 */
class Reasons extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function isVisible() {
    /** @var Drupal\Core\Routing\RouteMatchInterface $current_route_match */
    $current_route_match = \Drupal::service('current_route_match');
    $current_step = $current_route_match->getParameter('step');

    return $current_step != 'complete';
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'title' => '3 reasons to book directly with us',
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Block title'),
      '#placeholder' => $this->t('Enter block title'),
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

    $this->configuration['title'] = $form_state->getValue('title');
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'reasons',
        ],
      ],
    ];

    $pane_form['wrapper']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->configuration['title'],
      '#attributes' => [
        'class' => [
          'reasons-title',
        ],
      ],
    ];

    $pane_form['wrapper']['block'] = [
      '#type' => 'view',
      '#name' => 'reasons',
      '#display_id' => 'reasons_block',
      '#attributes' => [
        'class' => [
          'reasons-items',
        ],
      ],
    ];

    return $pane_form;
  }

}
