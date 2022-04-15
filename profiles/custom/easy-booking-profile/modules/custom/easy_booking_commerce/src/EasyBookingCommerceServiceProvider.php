<?php

namespace Drupal\easy_booking_commerce;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;

/**
 * Remove the bee event subscriber.
 */
class EasyBookingCommerceServiceProvider extends ServiceProviderBase {

  /**
   * {@inheritdoc}
   */
  public function alter(ContainerBuilder $container) {
    $container->removeDefinition('bee.order_subscriber');
  }

}
