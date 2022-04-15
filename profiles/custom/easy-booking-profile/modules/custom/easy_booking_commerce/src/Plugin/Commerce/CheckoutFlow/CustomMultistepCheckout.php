<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutFlow;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutFlow\CheckoutFlowWithPanesBase;

/**
 * Provides the default multistep checkout flow.
 *
 * @CommerceCheckoutFlow(
 *   id = "custom_multistep_checkout",
 *   label = "Custom Multistep Checkout",
 * )
 */
class CustomMultistepCheckout extends CheckoutFlowWithPanesBase {

  /**
   * {@inheritdoc}
   */
  public function getSteps() {
    return [
      'order_information' => [
        'label' => $this->t('Enter your details'),
        'has_sidebar' => TRUE,
      ],
      'payment' => [
        'label' => $this->t('Final details'),
        'next_label' => $this->t('Next: Final Details'),
        'has_sidebar' => TRUE,
      ],
      'payment_process' => [
        'label' => $this->t('Payment process'),
        'next_label' => $this->t('Complete booking'),
        'hidden' => TRUE,
      ],
      'complete' => [
        'label' => $this->t('Reserved!'),
        'has_sidebar' => TRUE,
      ],
    ];
  }

}
