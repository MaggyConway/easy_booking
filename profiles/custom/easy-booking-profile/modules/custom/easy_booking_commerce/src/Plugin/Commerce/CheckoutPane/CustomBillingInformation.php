<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\Core\Form\FormStateInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\BillingInformation;

/**
 * Provides the billing information pane.
 *
 * @CommerceCheckoutPane(
 *   id = "custom_billing_information",
 *   label = @Translation("Enter your details"),
 *   admin_label = @Translation("Custom billing information"),
 *   default_step = "payment",
 *   wrapper_element = "fieldset",
 * )
 */
class CustomBillingInformation extends BillingInformation {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $profile = $this->order->getBillingProfile();
    $order = $this->order->getStore();
    if (!$profile) {
      $profile_storage = $this->entityTypeManager->getStorage('profile');
      $profile = $profile_storage->create([
        'type' => 'customer',
        'uid' => 0,
      ]);
    };

    $inline_form = $this->inlineFormManager->createInstance('customer_profile', [
      'profile_scope' => 'billing',
      'available_countries' => $this->order->getStore()->getBillingCountries(),
      'address_book_uid' => $this->order->getCustomerId(),
      // Don't copy the profile to address book until the order is placed.
      'copy_on_save' => FALSE,
    ], $profile);

    $customer = $this->order->getData('customer');

    $customer['profile'] = [
      '#parents' => array_merge($customer['#parents'], ['profile']),
      '#inline_form' => $inline_form,
    ];

    $available_countries = $this->order->getStore()->getAvailableCountries();
    $customer_first_name = $customer['first_name'];
    $customer_last_name = $customer['last_name'];
    $customer_email = $customer['email'];
    $this->order->setData('customer', $customer);
    $this->order->save();

    $pane_form['custom_billing'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'custom-billing-profile--wrapper',
        ],
      ],
    ];

    $pane_form['custom_billing']['name_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'custom-billing-name--wrapper',
        ],
      ],
    ];

    $pane_form['custom_billing']['email_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'custom-billing-email--wrapper',
        ],
      ],
    ];

    $pane_form['custom_billing']['available_countries_wrapper'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => [
          'custom-billing-available-countries--wrapper',
        ],
      ],
    ];

    $pane_form['custom_billing']['name_wrapper']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'span',
      '#value' => "Name: ",
      '#attributes' => [
        'class' => [
          'custom-billing-profile--name-title',
        ],
      ],
    ];

    $pane_form['custom_billing']['name_wrapper']['item'] = [
      '#type' => 'html_tag',
      '#tag' => 'span',
      '#value' => "$customer_first_name $customer_last_name",
      '#attributes' => [
        'class' => [
          'custom-billing-profile--name-item',
        ],
      ],
    ];

    $pane_form['custom_billing']['email_wrapper']['title'] = [
      '#type' => 'html_tag',
      '#tag' => 'span',
      '#value' => 'Email: ',
      '#attributes' => [
        'class' => [
          'custom-billing-profile--email-title',
        ],
      ],
    ];

    $pane_form['custom_billing']['email_wrapper']['item'] = [
      '#type' => 'html_tag',
      '#tag' => 'span',
      '#value' => "$customer_email",
      '#attributes' => [
        'class' => [
          'custom-billing-profile--email-item',
        ],
      ],
    ];

    $pane_form['custom_billing']['available_countries_wrapper'] = [
      '#type' => 'select',
      '#tag' => 'div',
      '#options' => $available_countries,
      '#reqired' => TRUE,
      '#empty_option' => 'Choose country/region',
      '#placeholder' => 'Choose country/region',
      '#attributes' => [
        'class' => [
          'custom-billing-profile--available-countries',
        ],
      ],
    ];

    $pane_form['custom_billing']['help_text'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => 'We’ll send your booking confirmation to this email address.',
      '#attributes' => [
        'class' => [
          'custom-billing-profile--help-text',
        ],
      ],
    ];

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $customer = $this->order->getData('customer');
    /** @var \Drupal\commerce\Plugin\Commerce\InlineForm\EntityInlineFormInterface $inline_form */
    $inline_form = $customer['profile']['#inline_form'];
    /** @var \Drupal\profile\Entity\ProfileInterface $profile */
    $profile = $inline_form->getEntity();
    $pane_form['profile'] = $customer['profile'];
    $this->order->setBillingProfile($profile);
    $this->order->save();
    $country = $form_state->getValue($pane_form['custom_billing']['$available_countries_wrapper']);

    $this->order->setData('country', $country);
    $this->order->save();

    parent::submitPaneForm($pane_form, $form_state, $complete_form);
  }

}
