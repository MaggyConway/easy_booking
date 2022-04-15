<?php

namespace Drupal\easy_booking_commerce\EventSubscriber;

use Drupal\commerce_cart\CartProvider;
use Drupal\commerce_order\Event\OrderEvents;
use Drupal\commerce_order\Event\OrderItemEvent;
use Drupal\commerce_store\CurrentStore;
use Drupal\Core\Messenger\Messenger;
use Drupal\Core\Url;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * Class OrderItemDeleteEventSubscriber.
 *
 * @package Drupal\easy_booking_commerce\EventSubscriber
 */
class OrderItemEventSubscriber implements EventSubscriberInterface {

  /**
   * Commerce service to get store.
   *
   * @var \Drupal\commerce_store\CurrentStore
   */
  protected $currentStore;

  /**
   * Commerce cart provider service.
   *
   * @var \Drupal\commerce_cart\CartProvider
   */
  protected $cartProvider;

  /**
   * Messenger service.
   *
   * @var \Drupal\Core\Messenger\Messenger
   */
  protected $messenger;

  /**
   * OrderItemEventSubscriber constructor.
   *
   * @param \Drupal\commerce_store\CurrentStore $store
   *   Commerce service to get store.
   * @param \Drupal\commerce_cart\CartProvider $cart_provider
   *   Commerce cart provider service.
   * @param \Drupal\Core\Messenger\Messenger $messenger
   *   Messenger service.
   */
  public function __construct(CurrentStore $store, CartProvider $cart_provider, Messenger $messenger) {
    $this->currentStore = $store;
    $this->cartProvider = $cart_provider;
    $this->messenger = $messenger;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    return [
      OrderEvents::ORDER_ITEM_DELETE => 'deleteBooking',
      OrderEvents::ORDER_ITEM_INSERT => 'checkOrder',
    ];
  }

  /**
   * Deletes booking.
   *
   * @param \Drupal\commerce_order\Event\OrderItemEvent $event
   *   The order item event.
   *
   * @return \Symfony\Component\HttpFoundation\RedirectResponse|void
   *   RedirectResponse object.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function deleteBooking(OrderItemEvent $event) {
    $order_item = $event->getOrderItem();

    /** @var \Drupal\bat_booking\Entity\Booking $booking */
    if ($booking = $order_item->get('field_booking')->entity) {
      /** @var \Drupal\bat_event\Entity\Event $event */
      $event = $booking->get('booking_event_reference')->entity;
      $event->set('event_state_reference', 4)
        ->save();
      $booking->delete();
    }

    $order = $order_item->getOrder();
    if ($order && !$order->hasItems()) {
      return new RedirectResponse(Url::fromRoute('view.rooms.rooms_page'));
    }
  }

  /**
   * Checks for existed booking orders.
   *
   * @param \Drupal\commerce_order\Event\OrderItemEvent $event
   *   The order item event.
   */
  public function checkOrder(OrderItemEvent $event) {
    $store = $this->currentStore->getStore();
    $order = $this->cartProvider->getCart('rooms', $store);
    $order_item_type = $event->getOrderItem()
      ->getPurchasedEntity()
      ->getOrderItemTypeId();
    if (isset($order) && $order->hasItems() && $order_item_type != 'bee') {
      $response = new RedirectResponse(Url::fromRoute('commerce_checkout.form',
        ['commerce_order' => $order->id(), 'step' => 'order_information'])
        ->toString());
      $response->send();
      $this->messenger->addMessage('Please, complete or discard your current booking.', 'status', TRUE);
      exit;
    }
  }

}
