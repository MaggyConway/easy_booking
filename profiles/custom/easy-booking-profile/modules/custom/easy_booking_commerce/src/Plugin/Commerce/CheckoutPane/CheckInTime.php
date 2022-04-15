<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the check-in/check-out time pane.
 *
 * @CommerceCheckoutPane(
 *   id = "check_in_time",
 *   label = @Translation("Check-in/check-out time"),
 *   default_step = "_sidebar",
 * )
 */
class CheckInTime extends CheckoutPaneBase {

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
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $order_items = $this->order->getItems();
    $items_check_in_time = [];
    foreach ($order_items as $order_item) {
      if ($order_item->bundle() == 'bee') {
        $node = $order_item->get('field_node')->entity;
        $booking = $order_item->get('field_booking')->entity;

        $datetime = new DrupalDateTime();
        $room_check_in_time = $datetime->setTimestamp($node->get('field_check_in_time')->value)
          ->format('H:i');
        $room_check_out_time = $datetime->setTimestamp($node->get('field_check_out_time')->value)
          ->format('H:i');

        $datetime = new DrupalDateTime($booking->get('booking_start_date')->value);
        $booking_start_date = $datetime->format('l j F Y');

        $datetime = new DrupalDateTime($booking->get('booking_end_date')->value);
        $booking_end_date = $datetime->format('l j F Y');

        $items_check_in_time[] = [
          'booking_start_date' => $booking_start_date,
          'room_check_in_time' => $room_check_in_time,
          'booking_end_date' => $booking_end_date,
          'room_check_out_time' => $room_check_out_time,
        ];
      }
    }

    $pane_form['check_in_time'] = [
      '#theme' => 'easy_booking_commerce_check_in_time_pane',
      '#items_check_in_time' => $items_check_in_time,
    ];

    return $pane_form;
  }

}
