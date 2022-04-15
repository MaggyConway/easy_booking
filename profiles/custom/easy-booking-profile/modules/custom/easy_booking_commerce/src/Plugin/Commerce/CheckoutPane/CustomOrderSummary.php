<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Commerce pane for Order Summary.
 *
 * @CommerceCheckoutPane(
 *  id = "custom_order_summary",
 *  label = @Translation("Custom order summary"),
 *  admin_label = @Translation("Custom order summary"),
 * )
 */
class CustomOrderSummary extends CheckoutPaneBase implements CheckoutPaneInterface {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $complete_form = [
      '#type' => 'view',
      '#name' => 'commerce_cart_form',
      '#display_id' => 'default',
      '#arguments' => [$this->order->id()],
      '#title' => 'Order information',
      '#step_id' => 'order_information',
      '#cache' => [
        'tags' => ['view_commerce_cart_form'],
      ],
    ];

    $complete_form['actions']['next']['#type'] = FALSE;

    return $complete_form;
  }

}
