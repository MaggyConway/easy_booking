<?php

namespace Drupal\easy_booking_commerce\Plugin\Block;

use Drupal\Core\Cache\Cache;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Routing\CurrentRouteMatch;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'Cart Block'.
 *
 * @Block(
 *   id = "custom_cart_block",
 *   admin_label = @Translation("Custom Cart Block"),
 *   category = @Translation("Block"),
 * )
 */
class CustomCartBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Form builder service.
   *
   * @var \Drupal\Core\Form\FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * Current route match service.
   *
   * @var \Drupal\Core\Routing\CurrentRouteMatch
   */
  protected $currentRouteMatch;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, FormBuilderInterface $form_builder, CurrentRouteMatch $current_route_match) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->formBuilder = $form_builder;
    $this->currentRouteMatch = $current_route_match;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    /** @var \Drupal\Core\Form\FormBuilderInterface $form_builder */
    $form_builder = $container->get('form_builder');
    /** @var \Drupal\Core\Routing\CurrentRouteMatch $current_route_match */
    $current_route_match = $container->get('current_route_match');
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $form_builder,
      $current_route_match
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $current_route_name = $this->currentRouteMatch->getRouteName();

    if ($current_route_name == 'view.rooms.rooms_page') {
      return $this->formBuilder->getForm('Drupal\easy_booking_commerce\Form\CustomCartForm');
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    return Cache::mergeTags(parent::getCacheTags(), ['view_commerce_cart_form']);
  }

}
