<?php

namespace Drupal\easy_booking_custom\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'Location Block'.
 *
 * @Block(
 *   id = "location_block",
 *   admin_label = @Translation("Location Block"),
 *   category = @Translation("Block"),
 * )
 */
class LocationBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();

    $form['phone'] = [
      '#type' => 'tel',
      '#title' => $this->t('Phone'),
      '#default_value' => $config['phone'],
      '#required' => TRUE,
    ];

    $form['address'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Address'),
      '#default_value' => $config['address'],
      '#required' => TRUE,
    ];

    $form['title_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title text'),
      '#default_value' => $config['title_text'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['phone'] = $form_state->getValue('phone');
    $this->configuration['address'] = $form_state->getValue('address');
    $this->configuration['title_text'] = $form_state->getValue('title_text');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    $config = $this->getConfiguration();
    $map_config = \Drupal::config('easy_booking_map.settings');
    $site_config = \Drupal::config('system.site');

    $build['title_text'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => $config['title_text'],
      '#attributes' => [
        'class' => [
          'title-text',
        ],
      ],
    ];

    $build['info_map_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'info-map--wrapper',
        ],
      ],
    ];

    $build['info_map_wrapper']['map'] = [
      '#type' => 'markup',
      '#markup' => '<div id="map"></div>',
    ];

    $build['info_map_wrapper']['info'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'info',
        ],
      ],
    ];

    $build['info_map_wrapper']['info']['site_name'] = [
      '#type' => 'html_tag',
      '#tag' => 'b',
      '#value' => $site_config->get('name'),
      '#attributes' => [
        'class' => [
          'site-name',
        ],
      ],
    ];

    $build['info_map_wrapper']['info']['phone_info_field'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'info-field',
        ],
      ],
    ];

    $build['info_map_wrapper']['info']['address_info_field'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'info-field',
        ],
      ],
    ];

    $build['info_map_wrapper']['info']['email_info_field'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'info-field',
        ],
      ],
    ];

    if ($config['phone']) {
      $build['info_map_wrapper']['info']['phone_info_field']['phone_label'] = [
        '#type' => 'label',
        '#title' => $this->t('Phone'),
        '#title_display' => 'before',
        '#attributes' => [
          'class' => [
            'phone-label',
          ],
        ],
      ];

      $build['info_map_wrapper']['info']['phone_info_field']['phone'] = [
        '#type' => 'html_tag',
        '#tag' => 'p',
        '#value' => $config['phone'],
        '#attributes' => [
          'class' => [
            'phone-value',
          ],
        ],
      ];
    }

    if ($config['address']) {
      $build['info_map_wrapper']['info']['address_info_field']['address_label'] = [
        '#type' => 'label',
        '#title' => $this->t('Address'),
        '#title_display' => 'before',
        '#attributes' => [
          'class' => [
            'address-label',
          ],
        ],
      ];

      $build['info_map_wrapper']['info']['address_info_field']['address'] = [
        '#type' => 'html_tag',
        '#tag' => 'p',
        '#value' => $config['address'],
        '#attributes' => [
          'class' => [
            'address-value',
          ],
        ],
      ];
    }

    if ($mail = $site_config->get('mail')) {
      $build['info_map_wrapper']['info']['email_info_field']['email_label'] = [
        '#type' => 'label',
        '#title' => $this->t('Email'),
        '#title_display' => 'before',
        '#attributes' => [
          'class' => [
            'email-label',
          ],
        ],
      ];

      $build['info_map_wrapper']['info']['email_info_field']['email'] = [
        '#type' => 'html_tag',
        '#tag' => 'a',
        '#value' => $mail,
        '#attributes' => [
          'class' => [
            'email-value',
          ],
          'href' => 'mailto: ' . $mail,
        ],
      ];
    }

    $build['reasons_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'reasons',
        ],
      ],
    ];

    $build['reasons_wrapper']['reasons_title'] = [
      '#type' => 'html_tag',
      '#tag' => 'h2',
      '#value' => $this->t('3 reasons to book directly with us'),
      '#attributes' => [
        'class' => [
          'reasons-title',
        ],
      ],
    ];

    $build['reasons_wrapper']['reasons'] = [
      '#type' => 'view',
      '#name' => 'reasons',
      '#display_id' => 'reasons_block',
      '#attributes' => [
        'class' => [
          'reasons-items',
        ],
      ],
    ];

    $build['#attached'] = [
      'library' => [
        'easy_booking_map/mapbox',
      ],
      'drupalSettings' => [
        'mapbox' => [
          'accessToken' => $map_config->get('access_token'),
          'style' => $map_config->get('style'),
          'latitude' => $map_config->get('coordinates.lat'),
          'longitude' => $map_config->get('coordinates.lon'),
          'zoom' => $map_config->get('zoom'),
          'marker' => $map_config->get('marker.url'),
          'anchor' => $map_config->get('anchor'),
        ],
      ],
    ];

    $build['#attributes'] = [
      'class' => [
        'location-block',
      ],
    ];

    return $build;
  }

}
