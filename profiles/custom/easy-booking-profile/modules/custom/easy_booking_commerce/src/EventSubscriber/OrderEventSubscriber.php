<?php

namespace Drupal\easy_booking_commerce\EventSubscriber;

use Drupal\commerce_order\Event\OrderEvent;
use Drupal\commerce_order\Event\OrderEvents;
use Drupal\Core\Url;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Drupal\Core\Cache\Cache;

/**
 * Class OrderDeleteEventSubscriber.
 *
 * @package Drupal\easy_booking_commerce\EventSubscriber
 */
class OrderEventSubscriber implements EventSubscriberInterface {

  /**
   * Constructs a new OrderEvent object.
   */
  public function __construct() {
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    return [
      OrderEvents::ORDER_PREDELETE => 'deleteBookings',
      OrderEvents::ORDER_UPDATE => 'redirect',
      OrderEvents::ORDER_CREATE => 'invalidateCacheTag',
      OrderEvents::ORDER_UPDATE => 'invalidateCacheTag',
      OrderEvents::ORDER_PREDELETE => 'invalidateCacheTag',
    ];
  }

  /**
   * Deletes booking.
   *
   * @param \Drupal\commerce_order\Event\OrderEvent $event
   *   The workflow transition event.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function deleteBookings(OrderEvent $event) {
    $order = $event->getOrder();

    foreach ($order->getItems() as $order_item) {
      /** @var \Drupal\bat_booking\Entity\Booking $booking */
      if ($booking = $order_item->get('field_booking')->entity) {
        /** @var \Drupal\bat_event\Entity\Event $event */
        $event = $booking->get('booking_event_reference')->entity;
        $event->set('event_state_reference', 4)
          ->save();
        $booking->delete();
      }
    }
  }

  /**
   * Deletes booking.
   *
   * @param \Drupal\commerce_order\Event\OrderEvent $event
   *   The workflow transition event.
   */
  public function redirect(OrderEvent $event) {
    $order = $event->getOrder();
    if (!$order->hasItems()) {
      $response = new RedirectResponse(Url::fromRoute('view.rooms.rooms_page')
        ->toString());
      $response->send();
      return;
    }
  }

  /**
   * Invalidating Tag 'view_commerce_cart_form'.
   *
   * @param \Drupal\commerce_order\Event\OrderEvent $event
   *   The workflow transition event.
   */
  public function invalidateCacheTag(OrderEvent $event) {
    $order = $event->getOrder();
    $tags = [];
    if ($order) {
      $tags[] = 'view_commerce_cart_form';
    }
    if ($tags) {
      Cache::invalidateTags($tags);
    }
  }

}
