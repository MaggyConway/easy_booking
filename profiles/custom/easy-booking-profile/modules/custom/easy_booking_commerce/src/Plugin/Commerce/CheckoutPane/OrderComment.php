<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the order comment pane.
 *
 * @CommerceCheckoutPane(
 *   id = "order_comment",
 *   label = @Translation("Order comment"),
 *   default_step = "order_information",
 *   wrapper_element = "fieldset",
 * )
 */
class OrderComment extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'message_maxlength' => 300,
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationSummary() {
    return $summary = $this->t('Maximum message length: @length', [
      '@length' => $this->configuration['message_maxlength'],
    ]);
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);

    $form['message_maxlength'] = [
      '#type' => 'number',
      '#title' => $this->t('Maximum message length'),
      '#description' => $this->t('Enter the message length limit.'),
      '#default_value' => $this->configuration['message_maxlength'],
      '#min' => 0,
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);

    if (!$form_state->getErrors()) {
      $values = $form_state->getValue($form['#parents']);
      $this->configuration['message_maxlength'] = $values['message_maxlength'];
    }
  }

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['#title'] = t('Special requests');
    $pane_form['note'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => t('Please write your requests in English or the property’s language'),
    ];
    $pane_form['message'] = [
      '#type' => 'textarea',
      '#placeholder' => t('Message'),
      '#default_value' => $this->order->getData('comment') ?? '',
      '#maxlength' => $this->configuration['message_maxlength'],
      '#description' => t('* Please note: Do not disclose any personal or payment information in your request'),
    ];

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $values = $form_state->getValue($pane_form['#parents']);
    $this->order->setData('comment', $values['message']);
  }

}
