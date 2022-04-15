<?php

namespace Drupal\Tests\easy_booking\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * Tests for Easy Booking Workflow.
 */
class EasyBookingWorkflowTest extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected $profile = 'easy_booking';

  /**
   * Test anonymous user.
   *
   * @var \Drupal\user\Entity\User
   */
  protected $anonymousUser;

  /**
   * {@inheritdoc}
   */
  public function setUp() {
    parent::setUp();

    $this->anonymousUser = $this->drupalCreateUser();
  }

  /**
   * Smoke test of booking functionality.
   *
   * @throws \Behat\Mink\Exception\ElementNotFoundException
   * @throws \Behat\Mink\Exception\ResponseTextException
   * @throws \Behat\Mink\Exception\ExpectationException
   */
  public function testRoomBooking() {

    $this->drupalLogin($this->anonymousUser);
    $this->drupalGet('rooms/pacific-room');

    $page = $this->getSession()->getPage();

    $page->pressButton('book');
    $page->fillField('guest-name', 'Guest Name');
    $page->pressButton('edit-actions-next');

    $this->assertSession()->statusCodeEquals(200);

    /* Fill billing information */
    $page->fillField('edit-custom-billing-information-profile-address-0-address-address-line1', 'Address');
    $page->fillField('edit-custom-billing-information-profile-address-0-address-locality', 'City');
    $page->selectFieldOption('edit-custom-billing-information-profile-address-0-address-administrative-area', 'NY');
    $page->fillField('edit-custom-billing-information-profile-address-0-address-postal-code', '14520');

    /* Fill payment information */
    $page->fillField('cardholder', 'CARDHOLDER');
    $page->fillField('card-number', '4111111145551142');
    $page->fillField('expiration', '03/30');
    $page->fillField('security-code', '123');
    $page->checkField('agreement');
    $page->pressButton('edit-actions-next');

    /* Confirm successful booking */
    $this->assertSession()->pageTextContains('Booked');
  }

}
