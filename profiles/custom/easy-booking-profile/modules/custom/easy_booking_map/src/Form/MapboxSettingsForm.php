<?php

namespace Drupal\easy_booking_map\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\media\Entity\Media;

/**
 * Configure MapBox settings.
 */
class MapboxSettingsForm extends ConfigFormBase {

  /**
   * Config settings.
   *
   * @var string
   */
  const SETTINGS = 'easy_booking_map.settings';

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      static::SETTINGS,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'mapbox_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config(static::SETTINGS);

    $form['access_token'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Access token'),
      '#default_value' => $config->get('access_token'),
      '#description' => $this->t('MapBox access token. You can get it <a href="@url" target="_blank">here</a>.', [
        '@url' => 'https://account.mapbox.com/',
      ]),
      '#description_display' => 'before',
      '#pattern' => '^[pk.].*$',
    ];

    $form['style'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Style'),
      '#default_value' => $config->get('style'),
      '#description' => $this->t('MapBox style. You can create it <a href="@url" target="_blank">here</a>.', [
        '@url' => 'https://studio.mapbox.com/',
      ]),
      '#description_display' => 'before',
      '#pattern' => '^mapbox:\/\/styles\/.*\/.*$',
    ];

    $form['coordinates'] = [
      '#type' => 'geofield_latlon',
      '#title' => $this->t('Coordinates'),
      '#default_value' => $config->get('coordinates'),
    ];

    $form['zoom'] = [
      '#type' => 'number',
      '#title' => $this->t('Zoom level'),
      '#min' => 0,
      '#max' => 22,
      '#step' => 1,
      '#default_value' => $config->get('zoom'),
    ];

    $form['marker'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Marker'),
      '#target_type' => 'media',
      '#default_value' => Media::load($config->get('marker.id')),
      '#selection_settings' => [
        'target_bundles' => [
          'image',
        ],
      ],
    ];

    $form['marker_options'] = [
      '#type' => 'details',
      '#title' => $this->t('Marker options'),
    ];

    $anchor_options = [
      'center' => 'center',
      'top' => 'top',
      'bottom' => 'bottom',
      'left' => 'left',
      'right' => 'right',
      'top-left' => 'top-left',
      'top-right' => 'top-right',
      'bottom-left' => 'bottom-left',
      'bottom-right' => 'bottom-right',
    ];

    $form['marker_options']['anchor'] = [
      '#type' => 'select',
      '#title' => $this->t('Anchor'),
      '#description' => $this->t('A string indicating the part of the Marker that should be positioned closest to the coordinate set'),
      '#options' => $anchor_options,
      '#default_value' => $config->get('anchor'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    if ($form_state->getValue('marker')) {
      $marker = Media::load($form_state->getValue('marker'));
      $marker_url = file_create_url($marker->field_media_image->entity->getFileUri());

      $this->configFactory->getEditable(static::SETTINGS)
        ->set('marker.id', $form_state->getValue('marker'))
        ->set('marker.url', $marker_url);
    }
    else {
      $this->configFactory->getEditable(static::SETTINGS)
        ->set('marker.id', NULL)
        ->set('marker.url', NULL);
    }

    $this->configFactory->getEditable(static::SETTINGS)
      ->set('access_token', $form_state->getValue('access_token'))
      ->set('style', $form_state->getValue('style'))
      ->set('coordinates', $form_state->getValue('coordinates'))
      ->set('zoom', $form_state->getValue('zoom'))
      ->set('anchor', $form_state->getValue('anchor'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
