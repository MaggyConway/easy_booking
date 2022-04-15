import $ from 'jquery'; //eslint-disable-line
import { behaviors } from 'Drupal'; //eslint-disable-line

export default () => {
  behaviors.mobileMenu = {
    attach(context) {
      const $mobileMenu = $('.header__second', context);
      const $openBtn = $('.main-menu__open-btn', context);
      const $closeBtn = $('.main-menu__close-btn', context);

      $openBtn.once('mobile-menu-open').on('click', e => {
        e.preventDefault();

        $mobileMenu.addClass('is-open');
      });

      $closeBtn.once('mobile-menu-close').on('click', e => {
        e.preventDefault();

        $mobileMenu.removeClass('is-open');
      });
    },
  };
};
