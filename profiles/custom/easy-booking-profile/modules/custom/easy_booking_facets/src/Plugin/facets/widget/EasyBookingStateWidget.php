<?php

namespace Drupal\easy_booking_facets\Plugin\facets\widget;

use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\facets\FacetInterface;
use Drupal\bat_facets\Plugin\facets\widget\BatStateWidget;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * The facet bat widget.
 *
 * @FacetsWidget(
 *   id = "easy_booking_state",
 *   label = @Translation("Easy Booking State"),
 *   description = @Translation("A configurable widget for BAT"),
 * )
 */
class EasyBookingStateWidget extends BatStateWidget implements ContainerFactoryPluginInterface {

  /**
   * Form builder service.
   *
   * @var \Drupal\Core\Form\FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * BatStateWidget constructor.
   *
   * @param array $configuration
   *   The plugin configuration, i.e. an array with configuration values keyed
   *   by configuration option name. The special key 'context' may be used to
   *   initialize the defined contexts by setting it to an array of context
   *   values keyed by context names.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
   *   Form builder service.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, FormBuilderInterface $form_builder) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->formBuilder = $form_builder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    /** @var \Drupal\Core\Form\FormBuilderInterface $form_builder */
    $form_builder = $container->get('form_builder');
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $form_builder
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build(FacetInterface $facet) {
    $this->facet = $facet;

    $build = $this->formBuilder->getForm('Drupal\easy_booking_facets\Form\FacetsAvailabilityForm');

    return $build;
  }

}
