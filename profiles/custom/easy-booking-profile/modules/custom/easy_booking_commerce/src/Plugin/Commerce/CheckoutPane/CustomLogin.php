<?php

namespace Drupal\easy_booking_commerce\Plugin\Commerce\CheckoutPane;

use Drupal\Core\Entity\Entity\EntityFormDisplay;
use Drupal\Core\Form\FormStateInterface;
use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\Login;

/**
 * Provides the login pane.
 *
 * @CommerceCheckoutPane(
 *   id = "custom_login",
 *   label = @Translation("Custom login or continue as guest"),
 *   default_step = "login",
 * )
 */
class CustomLogin extends Login {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form = parent::buildPaneForm($pane_form, $form_state, $complete_form);
    $pane_form['guest']['text']['#markup'] = $this->t('Proceed to checkout. If you want to book more than one room or a room for several dates, please create an account.');

    $pane_form['register']['#title'] = $this->t('Register new Customer account');

    /** @var \Drupal\user\UserInterface $account */
    $account = $this->entityTypeManager->getStorage('user')->create([]);
    $form_display = EntityFormDisplay::collectRenderDisplay($account, 'register');
    $form_display->buildForm($account, $pane_form['register'], $form_state);

    return $pane_form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitPaneForm(array &$pane_form, FormStateInterface $form_state, array &$complete_form) {
    $order_item_price = $this->order->getItems()[0]->getUnitPrice();
    $triggering_element = $form_state->getTriggeringElement();
    $trigger = !empty($triggering_element['#op']) ? $triggering_element['#op'] : 'continue';
    switch ($trigger) {
      case 'login':
      case 'register':
        $storage = $this->entityTypeManager->getStorage('user');
        /** @var \Drupal\user\UserInterface $account */
        $account = $storage->load($form_state->get('logged_in_uid'));
        user_login_finalize($account);
        $this->order->setCustomer($account);
        $this->credentialsCheckFlood->clearAccount($this->clientIp, $account->getAccountName());

        $order_item = $this->order->getItems()[0];
        $order_item->setUnitPrice($order_item_price, TRUE);
        $order_item->save();
        $this->order->save();
        break;
    }

    $form_state->setRedirect('commerce_checkout.form', [
      'commerce_order' => $this->order->id(),
      'step' => $this->checkoutFlow->getNextStepId($this->getStepId()),
    ]);
  }

}
