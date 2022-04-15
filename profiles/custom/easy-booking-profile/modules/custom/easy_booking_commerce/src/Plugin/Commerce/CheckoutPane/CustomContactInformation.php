<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\ContactInformation;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the contact information pane.
 *
 * @CommerceCheckoutPane(
 *   id = "custom_contact_information",
 *   label = @Translation("Custom contact information"),
 *   admin_label = @Translation("Custom contact information"),
 *   default_step = "order_information",
 *   wrapper_element = "fieldset",
 * )
 */
class CustomContactInformation extends ContactInformation {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form = parent::buildPaneForm($pane_form, $form_state, $complete_form);
    $pane_form['#title'] = t('Enter your details');
    $pane_form['first_name'] = [
      '#type' => 'textfield',
      '#placeholder' => t('First name'),
      '#default_value' => $this->order->getData('first_name') ?? '',
      '#required' => TRUE,
      '#weight' => 0,
    ];
    $pane_form['last_name'] = [
      '#type' => 'textfield',
      '#placeholder' => t('Last name'),
      '#default_value' => $this->order->getData('last_name') ?? '',
      '#required' => TRUE,
      '#weight' => 1,
    ];
    unset($pane_form['email']['#title']);
    $pane_form['email']['#placeholder'] = t('Email address');
    $pane_form['email']['#description'] = t('We’ll send your booking confirmation to this email address.');
    $pane_form['email']['#weight'] = 2;
    if ($email_confirm = &$pane_form['email_confirm']) {
      unset($email_confirm['#title']);
      $email_confirm['#placeholder'] = t('Confirm email address');
      $email_confirm['#weight'] = 3;
    }

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function validatePaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $values = $form_state->getValue($pane_form['#parents']);
    if ($this->configuration['double_entry'] && $values['email'] != $values['email_confirm']) {
      $form_state->setError($pane_form['email_confirm'], $this->t('The specified emails do not match.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $values = $form_state->getValue($pane_form['#parents']);
    $this->order->setData('first_name', $values['first_name']);
    $this->order->setData('last_name', $values['last_name']);
    $this->order->setEmail($values['email']);
    $this->order->setEmail($values['email']);
  }

}
