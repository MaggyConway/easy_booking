<?php

namespace Drupal\easy_booking_commerce\Resolvers;

use Drupal\node\Entity\Node;
use Drupal\commerce\Context;
use Drupal\commerce\PurchasableEntityInterface;
use Drupal\commerce_price\Price;
use Drupal\commerce_price\Resolver\PriceResolverInterface;

/**
 * Provide the SalepriceResolver.
 *
 * @package Drupal\bee\Resolvers
 */
class SalepriceResolver implements PriceResolverInterface {

  /**
   * {@inheritdoc}
   */
  public function resolve(PurchasableEntityInterface $entity, $quantity, Context $context) {
    if ($entity->bundle() != 'bee') {
      return NULL;
    }

    $query = \Drupal::entityQuery('node')
      ->condition('field_product', $entity->getProductId());

    $nids = $query->execute();
    $node = Node::load(reset($nids));

    $base_price = $node->get('field_price')->number;
    $currency_code = $node->get('field_price')->currency_code;

    $price = new Price($base_price, $currency_code);

    return $price;
  }

}
