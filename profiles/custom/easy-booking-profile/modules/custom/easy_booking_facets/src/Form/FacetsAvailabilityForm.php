<?php

namespace Drupal\easy_booking_facets\Form;

use Drupal\Core\Url;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the FacetsAvailabilityForm.
 *
 * @package Drupal\easy_booking_facets\Form
 */
class FacetsAvailabilityForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'easy_booking_facets_availability_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $params = $this->getRequest()->query->all();

    $form['container'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['container-inline'],
      ],
    ];

    $date_format = $this->config('bat.settings')->get('date_format') ?: 'Y-m-d H:i';
    $today = new \DateTime();
    $tomorrow = clone($today);
    $tomorrow->modify('+1 day');

    $terms = \Drupal::entityTypeManager()
      ->getStorage('taxonomy_term')
      ->loadTree('rooms');

    foreach ($terms as $term) {
      $term_data[$term->tid] = $term->name;
    }

    $form['container']['date_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['date-container'],
      ],
    ];

    $form['container']['date_wrapper']['label'] = [
      '#type' => 'item',
      '#attributes' => [
        'class' => ['label'],
      ],
      '#plain_text' => $this->t('From-to'),
    ];

    $form['container']['date_wrapper']['date_interval'] = [
      '#type' => 'textfield',
      '#required' => TRUE,
    ];


    $form['container']['date_wrapper']['from'] = [
      '#type' => 'date',
      '#title' => $this->t('From'),
      '#title_display' => 'hidden',
      '#date_format' => $date_format,
      '#default_value' => $params['from'] ?? $today->format('Y-m-d'),
      '#attributes' => [
        'type' => 'date',
        'id' => 'datepicker-front-from',
        'class' => ['hidden'],
      ],
      '#required' => TRUE,
    ];

    $form['container']['date_wrapper']['to'] = [
      '#type' => 'date',
      '#title' => $this->t('To'),
      '#title_display' => 'hidden',
      '#date_format' => $date_format,
      '#default_value' => $params['from'] ?? $today->format('Y-m-d'),
      '#attributes' => [
        'type' => 'date',
        'id' => 'datepicker-front-to',
        'class' => ['hidden'],
      ],
      '#required' => TRUE,
    ];

    $form['container']['guests_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['guests-container'],
      ],
    ];

    $form['container']['guests_wrapper']['label'] = [
      '#type' => 'item',
      '#attributes' => [
        'class' => ['label'],
      ],
      '#plain_text' => $this->t('Guests'),
    ];

    $form['container']['guests_wrapper']['adults'] = [
      '#type' => 'number',
      '#title' => $this->t('Adults'),
      '#default_value' => $params['adults'] ?? 1,
      '#min' => 1,
    ];

    $form['container']['guests_wrapper']['children'] = [
      '#type' => 'number',
      '#title' => $this->t('Children'),
      '#default_value' => $params['children'] ?? 1,
      '#min' => 0,
    ];

    $form['container']['room_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['room-container'],
      ],
    ];

    $form['container']['room_wrapper']['room'] = [
      '#type' => 'select',
      '#title' => $this->t('Room'),
      '#options' => $term_data,
      '#default_value' => $params['room'] ?? NULL,
    ];

    $form['container']['room_wrapper']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Search'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $start_date = new \DateTime($values['from']);
    $end_date = new \DateTime($values['to']);

    if ($end_date <= $start_date) {
      $form_state->setErrorByName('date', $this->t('Check out date must be after the check-in.'));
      return;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $parameters = [
      'from' => $values['from'],
      'to' => $values['to'],
      'adults' => $values['adults'],
      'children' => $values['children'],
      'room' => $values['room'],
    ];

    $form_state->setRedirectUrl(Url::fromRoute('view.rooms.rooms_page', $parameters));
  }

}
