<?php

namespace Drupal\easy_booking_custom\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'ReservationFormBlock' block.
 *
 * @Block(
 *   id = "reservation_form_block",
 *   admin_label = @Translation("Reservation form block"),
 *   category = @Translation("Reservation form block"),
 *   context_definitions = {
 *     "node" = @ContextDefinition("entity:node", required = TRUE)
 *   }
 * )
 */
class ReservationFormBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Form builder service.
   *
   * @var \Drupal\Core\Form\FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * Block constructor.
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
  public function build() {
    /** @var \Drupal\node\Entity\Node $node */
    $node = $this->getContextValue('node');
    if ($node && $node->getType() == 'room') {
      return $this->formBuilder->getForm('Drupal\easy_booking_custom\Form\ReservationForm', $node);
    }
    if ($node && $node->getType() == 'daily_room') {
      return $this->formBuilder->getForm('Drupal\easy_booking_custom\Form\DailyReservationForm', $node);
    }
    return [];
  }

}
