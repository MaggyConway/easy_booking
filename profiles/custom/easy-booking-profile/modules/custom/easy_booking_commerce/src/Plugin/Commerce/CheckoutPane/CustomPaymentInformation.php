<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_payment\Plugin\Commerce\CheckoutPane\PaymentInformation;
use Drupal\commerce_payment\PaymentOption;
use Drupal\commerce_payment\Plugin\Commerce\PaymentGateway\SupportsCreatingPaymentMethodsInterface;
use Drupal\Component\Utility\NestedArray;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the payment information pane.
 *
 * Disabling this pane will automatically disable the payment process pane,
 * since they are always used together. Developers subclassing this pane
 * should use hook_commerce_checkout_pane_info_alter(array &$panes) to
 * point $panes['payment_information']['class'] to the new child class.
 *
 * @CommerceCheckoutPane(
 *   id = "payment_information",
 *   label = @Translation(""),
 *   default_step = "order_information",
 *   wrapper_element = "fieldset",
 * )
 */
class CustomPaymentInformation extends PaymentInformation {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    if (!$this->order->getTotalPrice() || $this->order->isPaid() || $this->order->getTotalPrice()->isZero()) {
      // No payment is needed if the order is free or has already been paid.
      // In that case, collect just the billing information.
      $pane_form['#title'] = $this->t('Billing information');
      $pane_form = $this->buildBillingProfileForm($pane_form, $form_state);
      return $pane_form;
    }

    /** @var \Drupal\commerce_payment\PaymentGatewayStorageInterface $payment_gateway_storage */
    $payment_gateway_storage = $this->entityTypeManager->getStorage('commerce_payment_gateway');
    // Load the payment gateways. This fires an event for filtering the
    // available gateways, and then evaluates conditions on all remaining ones.
    $payment_gateways = $payment_gateway_storage->loadMultipleForOrder($this->order);
    // Can't proceed without any payment gateways.
    if (empty($payment_gateways)) {
      $this->messenger()->addError($this->noPaymentGatewayErrorMessage());
      return $pane_form;
    }

    // Core bug #1988968 doesn't allow the payment method add form JS to depend
    // on an external library, so the libraries need to be preloaded here.
    foreach ($payment_gateways as $payment_gateway) {
      if ($js_library = $payment_gateway->getPlugin()->getJsLibrary()) {
        $pane_form['#attached']['library'][] = $js_library;
      }
    }

    $options = $this->paymentOptionsBuilder->buildOptions($this->order, $payment_gateways);
    $option_labels = array_map(function (PaymentOption $option) {
      return $option->getLabel();
    }, $options);
    $parents = array_merge($pane_form['#parents'], ['payment_method']);
    $default_option_id = NestedArray::getValue($form_state->getUserInput(), $parents);
    if ($default_option_id && isset($options[$default_option_id])) {
      $default_option = $options[$default_option_id];
    }
    else {
      $default_option = $this->paymentOptionsBuilder->selectDefaultOption($this->order, $options);
    }

    $pane_form['#after_build'][] = [get_class($this), 'clearValues'];
    $pane_form['payment_method'] = [
      '#type' => 'radios',
      '#title' => $this->t(''),
      '#options' => $option_labels,
      '#default_value' => $default_option->getId(),
      '#ajax' => [
        'callback' => [get_class($this), 'ajaxRefresh'],
        'wrapper' => $pane_form['#id'],
      ],
      '#access' => count($options) > 1,
    ];
    // Add a class to each individual radio, to help themers.
    foreach ($options as $option) {
      $class_name = $option->getPaymentMethodId() ? 'stored' : 'new';
      $pane_form['payment_method'][$option->getId()]['#attributes']['class'][] = "payment-method--$class_name";
    }
    // Store the options for submitPaneForm().
    $pane_form['#payment_options'] = $options;

    // If this is an existing payment method, return the pane form.
    // Editing payment methods at checkout is not supported.
    if ($default_option->getPaymentMethodId()) {
      return $pane_form;
    }

    $default_payment_gateway_id = $default_option->getPaymentGatewayId();
    $payment_gateway = $payment_gateways[$default_payment_gateway_id];
    $payment_gateway_plugin = $payment_gateway->getPlugin();

    // If this payment gateway plugin supports creating tokenized payment
    // methods before processing payment, we build the "add-payment-method"
    // plugin form.
    if ($payment_gateway_plugin instanceof SupportsCreatingPaymentMethodsInterface) {
      $pane_form = $this->buildPaymentMethodForm($pane_form, $form_state, $default_option);
    }
    // Check if the billing profile form should be rendered for the payment
    // gateway to collect billing information.
    elseif ($payment_gateway_plugin->collectsBillingInformation()) {
      $pane_form = $this->buildBillingProfileForm($pane_form, $form_state);
    }

    return $pane_form;
  }

}
