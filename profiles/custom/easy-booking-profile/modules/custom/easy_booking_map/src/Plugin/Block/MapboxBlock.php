<?php

namespace Drupal\easy_booking_map\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a MapBox block.
 *
 * @Block(
 *   id = "mapbox_block",
 *   admin_label = @Translation("MapBox"),
 * )
 */
class MapboxBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $config = \Drupal::config('easy_booking_map.settings');
    return [
      '#title' => $this->t('MapBox'),
      '#description' => $this->t('MapBox block'),
      '#theme' => 'mapbox',
      '#attached' => [
        'library' => [
          'easy_booking_map/mapbox',
        ],
        'drupalSettings' => [
          'mapbox' => [
            'accessToken' => $config->get('access_token'),
            'style' => $config->get('style'),
            'latitude' => $config->get('coordinates.lat'),
            'longitude' => $config->get('coordinates.lon'),
            'zoom' => $config->get('zoom'),
            'marker' => $config->get('marker.url'),
            'anchor' => $config->get('anchor'),
          ],
        ],
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  protected function blockAccess(AccountInterface $account) {
    return AccessResult::allowedIfHasPermission($account, 'access content');
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
  }

}
