<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;

/**
 * Provides the booking room information pane.
 *
 * @CommerceCheckoutPane(
 *   id = "booking_room_information",
 *   label = @Translation("Booking room information"),
 *   default_step = "order_information",
 *   wrapper_element = "fieldset",
 * )
 */
class BookingRoomInformation extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $order_items = $this->order->getItems();
    $rooms_count = 0;
    foreach ($order_items as $order_item) {
      if ($order_item->bundle() == 'bee') {
        $rooms_count++;

        /** @var \Drupal\node\Entity\Node $node */
        $node = $order_item->get('field_node')->entity;
        /** @var \Drupal\bat_booking\Entity\Booking $booking */
        $booking = $order_item->get('field_booking')->entity;

        $adults_number = $booking->get('field_adults_number')->value;
        $children_number = $booking->get('field_children_number')->value;
        $photo = $node->get('field_photos')->entity;
        /** @var \Drupal\file\Entity\File $photo */
        $photo = File::load($photo->get('field_media_image')->target_id);
        $photo_url = $photo->getFileUri();
        $photo_styled_url = ImageStyle::load('checkout_room_thumbnail')->buildUrl($photo_url);

        $start_date = new DrupalDateTime($booking->get('booking_start_date')->value);
        $start_date_formatted = $start_date->format('F j, Y');

        $end_date = new DrupalDateTime($booking->get('booking_end_date')->value);
        $end_date_formatted = $end_date->format('F j, Y');

        $nights = $start_date->diff($end_date)->days;
        $hours = $start_date->diff($end_date)->h;

        $nights_text = NULL;
        $hours_text = NULL;
        $date = NULL;

        if ($nights) {
          $nights_text = $this->formatPlural(
            $nights,
            '1 night',
            '@count nights'
          )->render();

          $date = $this->t('@start/@end', [
            '@start' => $start_date_formatted,
            '@end' => $end_date_formatted,
          ])->render();
        }
        else {
          $hours_text = $this->formatPlural(
            $hours,
            '1 hour',
            '@count hours'
          )->render();

          $date = $this->t('@start', [
            '@start' => $start_date_formatted,
          ]);
        }

        $reservation_text = $this->t('@date (@time)', [
          '@date' => $date,
          '@time' => $nights_text ?? $hours_text,
        ]);

        $adults_text = $this->formatPlural(
          $adults_number,
          '1 Adult',
          '@count Adults'
        )->render();

        $children_text = $children_number ? $this->formatPlural(
          $children_number,
          ', 1 Children',
          ', @count Children'
        )->render() : NULL;

        $guests_text = $this->t('Guests: @adults@children', [
          '@adults' => $adults_text,
          '@children' => $children_text,
        ]);

        $pane_form[$node->id()] = [
          '#type' => 'container',
          '#weight' => 1,
          '#attributes' => [
            'class' => [
              'room',
            ],
          ],
          'photo_wrapper' => [
            '#type' => 'container',
            '#attributes' => [
              'class' => [
                'room-img-wrapper',
              ],
            ],
            'photo' => [
              '#type' => 'html_tag',
              '#tag' => 'img',
              '#attributes' => [
                'src' => $photo_styled_url,
                'class' => [
                  'room-img',
                ],
              ],
            ],
          ],
          'room_info' => [
            '#type' => 'container',
            '#attributes' => [
              'class' => [
                'room-info',
              ],
            ],
            'title' => [
              '#type' => 'html_tag',
              '#tag' => 'h2',
              '#value' => $node->label(),
              '#attributes' => [
                'class' => [
                  'room-info__title',
                ],
              ],
            ],
            'reservation' => [
              '#type' => 'html_tag',
              '#tag' => 'div',
              '#value' => $reservation_text,
              '#attributes' => [
                'class' => [
                  'room-info__reservation',
                ],
              ],
            ],
            'guests' => [
              '#type' => 'html_tag',
              '#tag' => 'div',
              '#value' => $guests_text,
              '#attributes' => [
                'class' => [
                  'room-info__guests',
                ],
              ],
            ],
          ],
        ];
      };
      for ($i = 1; $i <= $adults_number; $i++) {
        $pane_form[$node->id()]["adult_$i" . '_guest_name'] = [
          '#type' => 'textfield',
          '#placeholder' => $this->t("Full adult's name"),
          '#required' => TRUE,
          '#id' => 'guest-name',
          '#attributes' => [
            'class' => [
              'room-info__guest-name',
            ],
          ],
        ];
      };
      if ($children_number > 0) {
        for ($i = 1; $i <= $children_number; $i++) {
          $pane_form[$node->id()]["children_$i" . '_guest_name'] = [
            '#type' => 'textfield',
            '#placeholder' => $this->t("Full children's name"),
            '#required' => TRUE,
            '#id' => 'guest-name',
            '#attributes' => [
              'class' => [
                'room-info__guest-name',
              ],
            ],
          ];
        };
      };
    };

    $pane_form['#title'] = $this->formatPlural(
      $rooms_count,
      'Room',
      'Rooms'
    );

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {

    $guests = $form_state->getValue($pane_form['#parents']);

    $this->order->setData('guests', $guests);

    parent::submitPaneForm($pane_form, $form_state, $complete_form);
  }

}
