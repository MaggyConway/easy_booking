<?php

namespace Drupal\easy_booking_commerce\PluginForm\Payment;

use Drupal\commerce_payment\CreditCard;
use Drupal\commerce_payment\Exception\DeclineException;
use Drupal\commerce_payment\Exception\PaymentGatewayException;
use Drupal\commerce_payment\PluginForm\PaymentMethodAddForm as BasePaymentMethodAddForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;
use Drupal\media\Entity\Media;
use Drupal\image\Entity\ImageStyle;

/**
 * Add choosing payment method.
 */
class PaymentMethodAddForm extends BasePaymentMethodAddForm {

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    /** @var \Drupal\commerce_payment\Entity\PaymentMethodInterface $payment_method */
    $payment_method = $this->entity;

    $form['payment_details'] = [
      '#parents' => array_merge($form['#parents'], ['payment_details']),
      '#type' => 'container',
      '#payment_method_type' => $payment_method->bundle(),
    ];

    $form['payment_details'] = $this->buildCreditCardForm($form['payment_details'], $form_state);

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {
    $this->validateCreditCardForm($form['payment_details'], $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    /** @var \Drupal\commerce_payment\Entity\PaymentMethodInterface $payment_method */
    $payment_method = $this->entity;

    $this->submitCreditCardForm($form['payment_details'], $form_state);

    $values = $form_state->getValue($form['#parents']);
    /** @var \Drupal\commerce_payment\Plugin\Commerce\PaymentGateway\SupportsStoredPaymentMethodsInterface $payment_gateway_plugin */
    $payment_gateway_plugin = $this->plugin;
    // The payment method form is customer facing. For security reasons
    // the returned errors need to be more generic.
    try {
      $payment_gateway_plugin->createPaymentMethod($payment_method, $values['payment_details']);
    }
    catch (DeclineException $e) {
      $this->logger->warning($e->getMessage());
      throw new DeclineException(t('We encountered an error processing your payment method. Please verify your details and try again.'));
    }
    catch (PaymentGatewayException $e) {
      $this->logger->error($e->getMessage());
      throw new PaymentGatewayException(t('We encountered an unexpected error processing your payment method. Please try again later.'));
    }
    $this->configuration['cards'] = $data['cards']['icons'];
  }

  /**
   * {@inheritdoc}
   */
  protected function buildCreditCardForm(array $element, FormStateInterface $form_state) {

    $element['#type'] = 'fieldset';
    $element['#title'] = $this->t('Your reservation guarantee');
    $element['#attributes']['class'][] = 'payment';

    // Placeholder for the detected card type. Set by validateCreditCardForm().
    $element['type'] = [
      '#type' => 'hidden',
      '#value' => '',
    ];

    $element['cardholder'] = [
      '#type' => 'textfield',
      '#placeholder' => $this->t('Cardholder Name'),
      '#required' => TRUE,
      '#id' => 'cardholder',
      '#attributes' => [
        'class' => [
          'cardholder',
        ],
      ],
    ];

    $element['number'] = [
      '#type' => 'textfield',
      '#placeholder' => $this->t('Card Number'),
      '#required' => TRUE,
      '#id' => 'card-number',
      '#attributes' => [
        'class' => [
          'number',
        ],
      ],
    ];

    $element['expiration'] = [
      '#type' => 'textfield',
      '#placeholder' => $this->t('Expiry date MM/YY'),
      '#required' => TRUE,
      '#id' => 'expiration',
      '#attributes' => [
        'class' => [
          'expiration',
        ],
      ],
    ];

    $element['security_code'] = [
      '#type' => 'textfield',
      '#placeholder' => $this->t('CVV'),
      '#required' => TRUE,
      '#id' => 'security-code',
      '#attributes' => [
        'class' => [
          'security-code',
        ],
      ],
    ];

    /** @var \Drupal\file\Entity\File $icon */
    $icons = $this->configuration['cards'];
    foreach ($icons as $icon) {

    };
    $first_icon = Media::load(12);
    $second_icon = Media::load(15);
    $third_icon = Media::load(10);

    $first_fid = $first_icon->field_media_image->target_id;
    $second_fid = $second_icon->field_media_image->target_id;
    $third_fid = $third_icon->field_media_image->target_id;

    $first_icon = File::load($first_fid);
    $second_icon = File::load($second_fid);
    $third_icon = File::load($third_fid);

    $first_icon_url = $first_icon->getFileUri();
    $second_icon_url = $second_icon->getFileUri();
    $third_icon_url = $third_icon->getFileUri();

    $first_icon_styled_url = ImageStyle::load('payment_cards_3rd_step_62_5_x_40')->buildUrl($first_icon_url);
    $second_icon_styled_url = ImageStyle::load('payment_cards_3rd_step_62_5_x_40')->buildUrl($second_icon_url);
    $third_icon_styled_url = ImageStyle::load('payment_cards_3rd_step_62_5_x_40')->buildUrl($third_icon_url);

    $element['cards'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'cards--wrapper',
        ],
      ],
    ];

    $element['cards']['first_item'][] = [
      '#type' => 'html_tag',
      '#tag' => 'img',
      '#attributes' => [
        'class' => [
          'first-card--icon',
        ],
        'src' => $first_icon_styled_url,
      ],
    ];

    $element['cards']['second_item'][] = [
      '#type' => 'html_tag',
      '#tag' => 'img',
      '#attributes' => [
        'class' => [
          'second-card--icon',
        ],
        'src' => $second_icon_styled_url,
      ],
    ];

    $element['cards']['third_item'][] = [
      '#type' => 'html_tag',
      '#tag' => 'img',
      '#attributes' => [
        'class' => [
          'third-card--icon',
        ],
        'src' => $third_icon_styled_url,
      ],
    ];

    $element['agreement'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('I agree with the booking conditions and general terms by making the reservation.'),
      '#required' => TRUE,
      '#id' => 'agreement',
      '#attributes' => [
        'class' => [
          'agreement',
        ],
      ],
    ];

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  protected function validateCreditCardForm(array &$element, FormStateInterface $form_state) {
    $values = $form_state->getValue($element['#parents']);
    $card_type = CreditCard::detectType($values['number']);
    if (!$card_type) {
      $form_state->setError($element['number'], t('You have entered a credit card number of an unsupported card type.'));
      return;
    }
    if (!CreditCard::validateNumber($values['number'], $card_type)) {
      $form_state->setError($element['number'], t('You have entered an invalid credit card number.'));
    }

    $expiration = [
      'month' => explode('/', $values['expiration'])[0],
      'year' => '20' . explode('/', $values['expiration'])[1],
    ];

    if (!CreditCard::validateExpirationDate($expiration['month'], $expiration['year'])) {
      $form_state->setError($element['expiration'], t('You have entered an expired credit card.'));
    }
    if (!CreditCard::validateSecurityCode($values['security_code'], $card_type)) {
      $form_state->setError($element['security_code'], t('You have entered an invalid CVV.'));
    }

    // Persist the detected card type.
    $form_state->setValueForElement($element['type'], $card_type->getId());
  }

  /**
   * {@inheritdoc}
   */
  protected function submitCreditCardForm(array $element, FormStateInterface $form_state) {
    $values = $form_state->getValue($element['#parents']);
    $this->entity->card_type = $values['type'];
    $this->entity->card_number = substr($values['number'], -4);

    $expiration = [
      'month' => explode('/', $values['expiration'])[0],
      'year' => '20' . explode('/', $values['expiration'])[1],
    ];

    $this->entity->card_exp_month = $expiration['month'];
    $this->entity->card_exp_year = $expiration['year'];
  }

}
