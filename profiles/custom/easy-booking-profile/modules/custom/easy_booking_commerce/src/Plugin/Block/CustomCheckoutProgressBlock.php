<?php

namespace Drupal\easy_booking_commerce\Plugin\Block;

use Drupal\commerce_checkout\Plugin\Block\CheckoutProgressBlock;

/**
 * Provides a checkout progress block.
 *
 * @Block(
 *   id = "easy_booking_commerce_checkout_progress",
 *   admin_label = @Translation("Easy Booking checkout progress"),
 *   category = @Translation("Commerce")
 * )
 */
class CustomCheckoutProgressBlock extends CheckoutProgressBlock {

  /**
   * Build CustomCheckoutProgressBlock.
   */
  public function build() {
    if ($custom_progress_block = parent::build()) {
      $custom_progress_block['#attached']['library'][0] = 'easy_booking_commerce/custom_checkout_progress';
      $custom_progress_block['#theme'] = 'easy_booking_commerce_checkout_progress';
      return $custom_progress_block;
    }
  }

}
