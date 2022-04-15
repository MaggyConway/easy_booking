<?php

namespace Drupal\easy_booking_commerce\EventSubscriber;

use Drupal\commerce_cart\CartProvider;
use Drupal\commerce_store\CurrentStore;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Url;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\commerce_cart\Event\CartEntityAddEvent;
use Drupal\commerce_cart\Event\CartEvents;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\StringTranslation\TranslationInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Provide the CartEventSubscriber.
 *
 * @package Drupal\easy_booking_commerce\EventSubscriber
 */
class CartEventSubscriber implements EventSubscriberInterface {

  use StringTranslationTrait;

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
   * The messenger.
   *
   * @var \Drupal\Core\Messenger\MessengerInterface
   */
  protected $messenger;

  /**
   * Constructs a new CartEventSubscriber object.
   *
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   *   The messenger.
   * @param \Drupal\Core\StringTranslation\TranslationInterface $string_translation
   *   The string translation.
   * @param \Drupal\commerce_store\CurrentStore $store
   *   Commerce service to get store.
   * @param \Drupal\commerce_cart\CartProvider $cart_provider
   *   Commerce cart provider service.
   */
  public function __construct(MessengerInterface $messenger, TranslationInterface $string_translation, CurrentStore $store, CartProvider $cart_provider) {
    $this->messenger = $messenger;
    $this->stringTranslation = $string_translation;
    $this->currentStore = $store;
    $this->cartProvider = $cart_provider;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    return [
      CartEvents::CART_ENTITY_ADD => 'displayAddToCartMessage',
      KernelEvents::REQUEST => 'checkForRedirection',
    ];
  }

  /**
   * Redirects to checkout page if cart is not empty.
   *
   * @param \Symfony\Component\HttpKernel\Event\GetResponseEvent $event
   *   HttpKernel event.
   */
  public function checkForRedirection(GetResponseEvent $event) {
    $path = $event->getRequest()->getRequestUri();
    if ($path == '/cart') {
      $store = $this->currentStore->getStore();
      /** @var \Drupal\commerce_order\Entity\Order $order */
      $order = $this->cartProvider->getCart('rooms', $store);
      if (isset($order) && $order->hasItems()) {
        $event->setResponse(new RedirectResponse(Url::fromRoute('commerce_checkout.form',
          ['commerce_order' => $order->id(), 'step' => 'order_information'])
          ->toString()));
      }
    }
  }

  /**
   * Displays an add to cart message.
   *
   * @param \Drupal\commerce_cart\Event\CartEntityAddEvent $event
   *   The add to cart event.
   */
  public function displayAddToCartMessage(CartEntityAddEvent $event) {
    if ($event->getOrderItem()->hasField('field_booking')) {
      $this->messenger->deleteAll();
      $this->messenger->addMessage($this->t('@entity was successfully booked!', [
        '@entity' => $event->getEntity()->label(),
      ]));
    }
  }

}
