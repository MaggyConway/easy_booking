<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;
use Drupal\taxonomy\Entity\Term;

/**
 * Provides the room amenities pane.
 *
 * @CommerceCheckoutPane(
 *   id = "room_amenities",
 *   label = @Translation("Room amenities"),
 *   default_step = "_sidebar",
 *   wrapper_element = "fieldset",
 * )
 */
class RoomAmenities extends CheckoutPaneBase {

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

    $amenities = [];

    foreach ($order_items as $order_item) {
      if ($order_item->bundle() == 'bee') {
        $node = $order_item->get('field_node')->entity;
        $amenity_ids = $node->get('field_amenities')->getValue();
        foreach ($amenity_ids as $amenity_id) {
          $amenities[] = Term::load($amenity_id['target_id']);
        }
      }
    }

    $amenities_list = [];
    foreach ($amenities as $amenity) {
      /** @var \Drupal\media\Entity\Media $amenity_icon */
      $amenity_icon = $amenity->get('field_icon')->entity;
      $amenity_icon = File::load($amenity_icon->get('field_media_image')->target_id);

      $amenities_list[$amenity->id()] = [
        'name' => $amenity->label(),
        'icon_url' => $amenity_icon->getFileUri(),
      ];
    }

    $pane_form['#title'] = t('Your stay includes');
    $pane_form['room_amenities'] = [
      '#theme' => 'easy_booking_commerce_room_amenities_pane',
      '#amenities' => $amenities_list,
      '#weight' => -1,
    ];

    return $pane_form;
  }

}
