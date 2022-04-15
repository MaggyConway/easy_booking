<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\PaymentGateway;

use Drupal\commerce_payment\CreditCard;
use Drupal\commerce_payment\Plugin\Commerce\PaymentGateway\OnsitePaymentGatewayBase;
use Drupal\commerce_payment\Entity\PaymentMethodInterface;
use Drupal\commerce_payment\Entity\PaymentInterface;
use Drupal\commerce_payment_example\Plugin\Commerce\PaymentGateway\OnsiteInterface;
use Drupal\commerce_price\Price;

/**
 * Gateway for payment.
 *
 * @CommercePaymentGateway(
 *   id = "easy_booking_gateway",
 *   label = @Translation("Easy Booking Payment Gateway"),
 *   display_label = @Translation("Easy Booking Payment Gateway"),
 *   forms = {
 *     "add-payment-method" = "Drupal\easy_booking_commerce\PluginForm\Payment\PaymentMethodAddForm",
 *   },
 *   payment_method_types = {
 *     "credit_card",
 *   },
 *   credit_card_types = {
 *     "visa", "mastercard", "maestro",
 *   },
 * )
 */
class EasyBookingGateway extends OnsitePaymentGatewayBase implements OnsiteInterface {

  /**
   * {@inheritdoc}
   */
  public function createPayment(PaymentInterface $payment, $capture = TRUE) {
    $this->assertPaymentState($payment, ['new']);
    $payment_method = $payment->getPaymentMethod();
    $this->assertPaymentMethod($payment_method);

    $remote_id = '123456';
    $next_state = $capture ? 'completed' : 'authorization';

    $payment->setRemoteId($remote_id);
    $payment->setState($next_state);
    $payment->setAvsResponseCode('A');

    if (!$payment_method->card_type->isEmpty()) {
      $avs_response_code_label = $this->buildAvsResponseCodeLabel('A', $payment_method->card_type->value);
      $payment->setAvsResponseCodeLabel($avs_response_code_label);
    }

    $payment->save();
  }

  /**
   * {@inheritdoc}
   */
  public function capturePayment(PaymentInterface $payment, Price $amount = NULL) {
    $this->assertPaymentState($payment, ['authorization']);

    $amount = $amount ?? $payment->getAmount();

    $payment->setState('completed');
    $payment->setAmount($amount);
    $payment->save();
  }

  /**
   * {@inheritdoc}
   */
  public function voidPayment(PaymentInterface $payment) {
    $this->assertPaymentState($payment, ['authorization']);

    $payment->setState('authorization_voided');
    $payment->save();
  }

  /**
   * {@inheritdoc}
   */
  public function refundPayment(PaymentInterface $payment, Price $amount = NULL) {
    $this->assertPaymentState($payment, ['completed', 'partially_refunded']);

    $amount = $amount ?? $payment->getAmount();

    $this->assertRefundAmount($payment, $amount);

    $old_refunded_amount = $payment->getRefundedAmount();
    $new_refunded_amount = $old_refunded_amount->add($amount);
    if ($new_refunded_amount->lessThan($payment->getAmount())) {
      $payment->setState('partially_refunded');
    }
    else {
      $payment->setState('refunded');
    }

    $payment->setRefundedAmount($new_refunded_amount);
    $payment->save();
  }

  /**
   * {@inheritdoc}
   */
  public function createPaymentMethod(PaymentMethodInterface $payment_method, array $payment_details) {

    $required_keys = [
      'cardholder', 'number', 'expiration',
    ];

    foreach ($required_keys as $required_key) {
      if (empty($payment_details[$required_key])) {
        throw new \InvalidArgumentException(sprintf('$payment_details must contain the %s key.', $required_key));
      }
    }

    $expiration = [
      'month' => explode('/', $payment_details['expiration'])[0],
      'year' => '20' . explode('/', $payment_details['expiration'])[1],
    ];

    $payment_method->card_type = $payment_details['type'];
    $payment_method->card_number = substr($payment_details['number'], -4);
    $payment_method->card_exp_month = $expiration['month'];
    $payment_method->card_exp_year = $expiration['year'];
    $expires_time = CreditCard::calculateExpirationTimestamp($expiration['month'], $expiration['year']);

    $remote_id = 789;

    $payment_method->setRemoteId($remote_id);
    $payment_method->setExpiresTime($expires_time);
    $payment_method->save();
  }

  /**
   * {@inheritdoc}
   */
  public function updatePaymentMethod(PaymentMethodInterface $payment_method) {}

  /**
   * {@inheritdoc}
   */
  public function deletePaymentMethod(PaymentMethodInterface $payment_method) {
    $payment_method->delete();
  }

}
