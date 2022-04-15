(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ "./src/scripts/main.js");



/***/ }),

/***/ "./src/scripts/attractions/attractions-card-rout.js":
/*!**********************************************************!*\
  !*** ./src/scripts/attractions/attractions-card-rout.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.cardAttractions = {
    attach: function attach(context, settings) {
      var coordItemAttractions = {
        latitude: '',
        longitude: ''
      };
      $('.view-attractions .views-col').once().on('click', function () {
        $('.path--attractions .views-row .views-col').removeClass('active');
        $(this).addClass('active');

        if ($('.path-attractions #map')) {
          var mapInfo = document.querySelector('.path--attractions .view-display-id-attractions_page .view-header');
          var titleInfo = $(this).find('.views-field-field-attraction-name .field-content').html();
          var addressLabelInfo = $(this).find('.views-field-field-address .views-label').html();
          var addressInfo = $(this).find('.views-field-field-address .field-content').html();
          var countryInfo = $(this).find('.views-field-field-country .field-content').html();
          var destinationLabelInfo = $(this).find('.views-field-field-destination-1 .views-label').html();
          var destinationInfo = $(this).find('.views-field-field-destination-1 .field-content').html();
          var linkInfo = $(this).find('.views-field-nothing-1 .field-content').html();

          if ($('.map-info-wrapper')) {
            $('.map-info-wrapper').remove();
          }

          mapInfo.insertAdjacentHTML("beforeend", "\n                    <div class=\"map-info-wrapper\">\n                        <h3 class=\"title-info\">".concat(titleInfo, "</h3>\n                        <div class=\"map-info-content\">\n                            <div class=\"map-info-item\">\n                                <div class=\"map-info-label\">").concat(addressLabelInfo, "</div>\n                                <div class=\"map-info-text-wrapper\">\n                                    <div class=\"map-info-text\">").concat(addressInfo, "</div>\n                                    <div class=\"map-info-country\">").concat(countryInfo, "</div>\n                                </div>\n                            </div>\n                            <div class=\"map-info-item\">\n                                <div class=\"map-info-label\">").concat(destinationLabelInfo, "</div>\n                                <div class=\"map-info-text-wrapper\">\n                                    <div class=\"map-info-text\">").concat(destinationInfo, "</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>"));
        }
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/basket/basket.js":
/*!**************************************!*\
  !*** ./src/scripts/basket/basket.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  $(document).ready(function () {
    var mobileBasket = document.querySelector('.path-cart form');

    if (mobileBasket) {
      mobileBasket.insertAdjacentHTML("afterbegin", "\n            <div class=\"mobile-basket\">\n                <div class=\"mobile-basket__header\">\n                    <div class=\"header-item header-item__item\"></div>\n                    <div class=\"header-item header-item__price\"></div>\n                    <div class=\"header-item header-item__quantity\"></div>\n                </div>\n            </div>");
      var allItemsCart = document.querySelectorAll('.path-cart .views-form .views-view-table tbody tr');
      var mobileCartContainer = document.querySelector('.mobile-basket');
      allItemsCart.forEach(function (element, i) {
        mobileCartContainer.insertAdjacentHTML("beforeend", "\n                    <div class=\"mobile-basket__item\">\n\n                        <div class=\"mobile-basket__content\">\n                            <div class=\"content-item content-img\"></div>\n                            <div class=\"content-item content-price\"></div>\n                            <div class=\"content-item content-quantity\"></div>\n                        </div>\n\n                        <div class=\"mobile-basket__info\">\n                            <div class=\"info-desc\"></div>\n                            <div class=\"info-delete\"></div>\n                        </div>\n\n                        <div class=\"mobile-basket__footer\">\n                            <div class=\"footer-total\"></div>\n                            <div class=\"footer-price\"></div>\n                        </div>\n                </div>");
        var mobileBasketItem = document.querySelectorAll('.mobile-basket .mobile-basket__item');
        mobileBasketItem.forEach(function (item, index) {
          if (index === i) {
            item.querySelector('.content-price').innerHTML = element.querySelector('.price-wrapper').innerHTML;
            item.querySelector('.content-quantity').innerHTML = element.querySelector('.form-type-number').innerHTML;
            item.querySelector('.info-desc').innerHTML = element.querySelector('.details-wrapper').innerHTML;
            item.querySelector('.footer-total').innerHTML = document.querySelector('.views-view-table thead .views-field-total-price__number').innerHTML;
            item.querySelector('.footer-price').innerHTML = element.querySelector('.views-field-total-price__number').innerHTML;
            item.querySelector('.content-img').appendChild(element.querySelector('.image-wrapper img').cloneNode());
            item.querySelector('.info-delete').appendChild(element.querySelector('.views-field-remove-button input').cloneNode());
          }
        });
      });
      document.querySelector('.header-item__item').innerHTML = document.querySelector('.path-cart form thead .views-field-nothing').innerHTML;
      document.querySelector('.header-item__price').innerHTML = document.querySelector('.path-cart form thead .views-field-nothing-1').innerHTML;
      document.querySelector('.header-item__quantity').innerHTML = document.querySelector('.path-cart form thead .views-field-edit-quantity').innerHTML;
    }

    var basketItem = document.querySelectorAll('.block-commerce-cart .cart--cart-block .cart-block--summary .cart-block--summary__count');
    basketItem.forEach(function (element) {
      if (element.textContent !== "0 items") {
        element.classList.add('full-cart');
      }
    });
  });
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/cookie/cookie-margin.js":
/*!*********************************************!*\
  !*** ./src/scripts/cookie/cookie-margin.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Drupal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Drupal */ "Drupal");
/* harmony import */ var Drupal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Drupal__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Drupal__WEBPACK_IMPORTED_MODULE_0__["behaviors"].cookieMargin = {
    attach: function attach() {
      window.addEventListener('load', function () {
        var cookieBanner = document.querySelectorAll('.eu-cookie-compliance-content');
        var cookieBannerBtn = document.querySelectorAll('.eu-cookie-compliance-content .eu-cookie-compliance-buttons .agree-button');
        var footer = document.querySelector('footer');

        if (cookieBanner.length > 0) {
          footer.classList.add('cookie-margin');
        }

        cookieBannerBtn.forEach(function (item) {
          item.addEventListener('click', function () {
            footer.classList.remove('cookie-margin');
          });
        });
      });
    }
  };
});

/***/ }),

/***/ "./src/scripts/filter/filter.js":
/*!**************************************!*\
  !*** ./src/scripts/filter/filter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.filterEasyBooking = {
    attach: function attach(context, settings) {
      $('.view-filters, .block-views-exposed-filter-blockattractions-attractions-page').once('mobile-filter-container').each(function () {
        $('.view-filters, .block-views-exposed-filter-blockattractions-attractions-page').prepend('<div class="mobile-filter-container">мобильный контейнер</div>');
        $('.fieldset-wrapper .form-radios .form-radios .form-item:first label').addClass('active');
        $('.view-filters .mobile-filter-container, .block-views-exposed-filter-blockattractions-attractions-page .mobile-filter-container').html($('.fieldset-wrapper .form-radios .form-radios .form-item .form-radio:checked + label').text());
      });
      $('.view-filters .mobile-filter-container, .block-views-exposed-filter-blockattractions-attractions-page .mobile-filter-container').once().on('click', function () {
        $('.view-filters .mobile-filter-container, .block-views-exposed-filter-blockattractions-attractions-page .mobile-filter-container').toggleClass('show');
        $('.fieldset-wrapper .form-radios .form-radios').toggleClass('show');
      });
      $(document).ready(function () {
        if ($('#edit-guests-wrapper').length > 0) {
          $('.form-item-adults, .form-item-children').once().wrapAll("<div class='guest_items_wrap'></div>");
        }

        if ($('#edit-container .form-submit').length > 0) {
          $('#edit-container .form-submit').once().wrap('<div class="header_search_wrap"></div>');
        }

        $('#edit-container > .form-wrapper, .reservation_form--wrapper > .form-wrapper').once().click(function (e) {
          if ($(window).width() <= 768) {
            if ($(this).hasClass('active')) {
              $('body').removeClass('mob_filter_opened');
            } else {
              $('body').addClass('mob_filter_opened');
            }

            switch ($(this).attr('id')) {
              case 'edit-date-wrapper':
                $('.daterangepicker .drp-calendar.left').once().append('<div class="daterangepicker-nav-wrapper"></div>');

                if ($('.daterangepicker-nav-wrapper .prev.available').length === 0) {
                  $('.daterangepicker .drp-calendar .calendar-table .prev').once().clone().appendTo('.daterangepicker-nav-wrapper');
                }

                if ($('.daterangepicker-nav-wrapper .next.available').length === 0) {
                  $('.daterangepicker .drp-calendar .calendar-table .next').once().clone().appendTo('.daterangepicker-nav-wrapper');
                }

                break;

              case 'edit-dates-wrapper':
                $('.daterangepicker .drp-calendar.left').once().append('<div class="daterangepicker-nav-wrapper"></div>');

                if ($('.daterangepicker-nav-wrapper .prev.available').length === 0) {
                  $('.daterangepicker .drp-calendar .calendar-table .prev').once().clone().appendTo('.daterangepicker-nav-wrapper');
                }

                if ($('.daterangepicker-nav-wrapper .next.available').length === 0) {
                  $('.daterangepicker .drp-calendar .calendar-table .next').once().clone().appendTo('.daterangepicker-nav-wrapper');
                }

                break;

              case 'edit-guests-wrapper':
                $('.guests-dropdown').once().append('<button id="filter_choose_btn">Choose</button>');
                break;

              case 'edit-room-wrapper':
                $('.new-select__list').once().append('<button id="filter_choose_btn">Choose</button>');
                $('.new-select__list span').click(function (e) {
                  $('.new-select__list span').removeClass('act');
                  $(this).addClass('act');
                });
                break;

              default:
                break;
            }

            $('#filter_choose_btn').on('click', function (e) {
              e.prev();
              $('.daterangepicker').removeClass('opened');
              $('#edit-container > .form-wrapper').removeClass('active').removeClass('free');
            });
          }

          switch ($(this).attr('id')) {
            case 'edit-date-wrapper':
              if ($(this).hasClass('active')) {
                $('#edit-container > .form-wrapper').removeClass('active').removeClass('free');
                $(this).find('#edit-date-interval').blur();
                $('#edit-container').removeClass('show');
              } else {
                $('#edit-container > .form-wrapper').not($(this)).removeClass('active').addClass('free');
                $(this).removeClass('free');
                $(this).addClass('active');
                $('#edit-date-interval').focus();
                $('#edit-container').addClass('show');
                $('.guests-dropdown').slideUp();
              }

              break;

            case 'edit-dates-wrapper':
              if ($(this).hasClass('active')) {
                $('#edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
                $('#edit-datetime-interval').blur();
                $('.daterangepicker').removeClass('opened');
                $('#edit-reservation-form').removeClass('show');
              } else {
                $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
                $(this).addClass('active');
                $('#edit-datetime-interval').focus();
                $('.daterangepicker').addClass('opened');
                $('#edit-guests-wrapper').addClass('free');
                $('#edit-reservation-form').addClass('show');
                $('.guests-dropdown').slideUp();
              }

              break;

            case 'edit-guests-wrapper':
              if ($(this).hasClass('active')) {
                if (!$(e.target).hasClass('btn-minus') && !$(e.target).hasClass('btn-plus')) {
                  $('.guests-dropdown').slideUp();
                  $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
                  $('#edit-container, #edit-reservation-form').removeClass('show');
                }
              } else {
                $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
                $(this).addClass('active');
                $('#edit-date-wrapper, #edit-dates-wrapper').addClass('free');
                $('.guests-dropdown').slideDown();
                $('#edit-container, #edit-reservation-form').addClass('show');
                $('.guests-dropdown input').each(function (index, el) {
                  if ($(el).val() == 0) {
                    $(el).parent().find('.btn-minus').prop('disabled', true);
                  }

                  if ($(el).val() == 9) {
                    $(el).parent().find('.btn-plus').prop('disabled', true);
                  }
                });
              }

              break;

            case 'edit-room-wrapper':
              if ($(this).hasClass('active')) {
                $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free').blur();
                $('#edit-container, #edit-reservation-form').removeClass('show');
              } else {
                $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
                $('.guests-dropdown').slideUp();
                $(this).addClass('active');
                $('#edit-container > .form-wrapper').not($(this)).addClass('free');
                $('#edit-container, #edit-reservation-form').addClass('show');
              }

              break;

            default:
              console.log($(this), 'default case');
              break;
          }
        });
      });
      $('body').on('click', function (e) {
        if ($(e.target).closest('#edit-container').length == 0 && $(e.target).closest('.reservation_form--wrapper').length == 0) {
          $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
          $('.guests-dropdown').slideUp();
          $('#edit-container, #edit-reservation-form').removeClass('show');
          $('#edit-room-wrapper').removeClass('no-before');

          if ($(window).width() <= 768) {
            $(this).removeClass('mob_filter_opened');
          }
        }
      });
      $("#edit-guests-wrapper").on({
        mouseenter: function mouseenter() {
          $('#edit-room-wrapper').addClass('no-before');
        },
        mouseleave: function mouseleave() {
          $('#edit-room-wrapper').removeClass('no-before');
        }
      });
      $('#edit-container > .form-wrapper').mouseenter(function () {
        if ($('#edit-room-wrapper').hasClass('active')) {
          $("#edit-guests-wrapper").addClass('has-before');
        } else {
          $("#edit-guests-wrapper").removeClass('has-before');
        }
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/header-form/daterange.js":
/*!**********************************************!*\
  !*** ./src/scripts/header-form/daterange.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.dateRange = {
    attach: function attach(context, settings) {
      $(function () {
        $('input[name="date_interval"]').daterangepicker({
          autoApply: true,
          locale: {
            applyLabel: 'Choose',
            format: 'ddd, D MMM',
            separator: ' - ',
            firstDay: 1,
            "weekLabel": "W",
            "daysOfWeek": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          }
        }, function (start, end) {
          $('#datepicker-front-from').val(start.format('YYYY-MM-DD'));
          $('#datepicker-front-to').val(end.format('YYYY-MM-DD'));
        });
        $('input[name="date_interval"]').on('show.daterangepicker', function () {
          $('.daterangepicker').addClass('opened');
        });
        $('input[name="date_interval"]').on('hide.daterangepicker', function () {
          $('.daterangepicker').removeClass('opened');
        });
        $('input[name="date_interval"]').on('showCalendar.daterangepicker', function () {
          if ($('.daterangepicker .end-date').length > 0 && !$('.daterangepicker .end-date').hasClass('start-date')) {
            $('.daterangepicker .end-date').prev().addClass('prev-end-date');
            var startGradientCell = $('.daterangepicker .drp-calendar.right .calendar-table table tbody td.in-range').not('.off').not('.active').first();
            startGradientCell.addClass('first-day-in-month');
            var endGradientCell = $('.daterangepicker .drp-calendar.left .calendar-table table tbody td.in-range').not('.off').not('.active').last();
            endGradientCell.addClass('last-day-in-month');
          }
        });
        $('input[name="date_interval"]').on('apply.daterangepicker', function () {
          $('#edit-date-wrapper').removeClass('active');
          $('body').removeClass('mob_filter_opened');
        });
      });
    }
  };
  Drupal.behaviors.dateTimeRange = {
    attach: function attach(context, settings) {
      $(function () {
        $('input[name="datetime_interval"]').daterangepicker({
          autoApply: true,
          timePicker: true,
          locale: {
            applyLabel: 'Choose',
            format: 'ddd, D MMM, hh:mm A',
            separator: ' - ',
            firstDay: 1,
            "weekLabel": "W",
            "daysOfWeek": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          }
        }, function (start, end) {
          $('#edit-start-date-date').val(start.format('YYYY-MM-DD'));
          $('#edit-end-date-date').val(end.format('YYYY-MM-DD'));
          $('#edit-start-date-time').val(start.format('HH:00:00'));
          $('#edit-end-date-time').val(end.format('HH:00:00'));
        });
        $('input[name="datetime_interval"]').on('show.daterangepicker', function () {
          $('.daterangepicker').addClass('opened');
        });
        $('input[name="datetime_interval"]').on('hide.daterangepicker', function () {
          $('.daterangepicker').removeClass('opened');
        });
        $('input[name="datetime_interval"]').on('showCalendar.daterangepicker', function () {
          if ($('.daterangepicker .end-date').length > 0 && !$('.daterangepicker .end-date').hasClass('start-date')) {
            $('.daterangepicker .end-date').prev().addClass('prev-end-date');
            $('.daterangepicker .drp-calendar .in-range.off:first').prev().addClass('last-day-in-month');
            $('.daterangepicker .drp-calendar .in-range.off:last').next().addClass('first-day-in-month');
          }
        });
        $('input[name="datetime_interval"]').on('apply.daterangepicker', function () {
          $('#edit-dates-wrapper').removeClass('active');
        });
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/header-form/guests-dropdown.js":
/*!****************************************************!*\
  !*** ./src/scripts/header-form/guests-dropdown.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.headerForm = {
    attach: function attach(context, settings) {
      var headerForm = {};
      $('header #easy-booking-facets-availability-form #edit-guests-wrapper').once('guests-dropdown').each(function () {
        $('header #easy-booking-facets-availability-form #edit-guests-wrapper').prepend("\n                <div class=\"guests-dropdown\">\n                \n                <div class=\"guests-dropdown__field guests-dropdown__field_adults\">\n                <div class=\"guests-dropdown__text\">\n                <div class=\"guests-dropdown__title\">Adults</div>\n                <div class=\"guests-dropdown__desc\">Ages 13 or above</div>\n                </div>\n                <div class=\"guests-dropdown__control\">\n                <button type=\"button\" class=\"btn-minus\">-</button>\n                \n                <input type=\"number\" name=\"dropdown-adults\">\n                \n                <button type=\"button\" class=\"btn-plus\">+</button>\n                </div>\n                </div>\n                \n                <div class=\"guests-dropdown__field guests-dropdown__field_children\">\n                <div class=\"guests-dropdown__text\">\n                <div class=\"guests-dropdown__title\">Children</div>\n                <div class=\"guests-dropdown__desc\">Ages 2-12</div>\n                </div>\n                <div class=\"guests-dropdown__control\">\n                <button type=\"button\" class=\"btn-minus\">-</button>\n                \n                <input type=\"number\" name=\"dropdown-adults\">\n                \n                <button type=\"button\" class=\"btn-plus\">+</button>\n                </div>\n                </div>\n                \n                </div>");
        $('.guests-dropdown__field_adults input').val($('#edit-adults').val());
        $('.guests-dropdown__field_children input').val($('#edit-children').val());
        $('#edit-adults').attr('max', 9);
        $('#edit-children').attr('max', 9);
      });
      $('.reservation_form--wrapper #edit-guests-wrapper').once('guests-dropdown').each(function () {
        $('.reservation_form--wrapper #edit-guests-wrapper').prepend("\n                <div class=\"guests-dropdown\">\n                \n                <div class=\"guests-dropdown__field guests-dropdown__field_adults\">\n                <div class=\"guests-dropdown__text\">\n                <div class=\"guests-dropdown__title\">Adults</div>\n                <div class=\"guests-dropdown__desc\">Ages 13 or above</div>\n                </div>\n                <div class=\"guests-dropdown__control\">\n                <button type=\"button\" class=\"btn-minus\">-</button>\n                \n                <input type=\"number\" name=\"dropdown-adults\">\n                \n                <button type=\"button\" class=\"btn-plus\">+</button>\n                </div>\n                </div>\n                \n                <div class=\"guests-dropdown__field guests-dropdown__field_children\">\n                <div class=\"guests-dropdown__text\">\n                <div class=\"guests-dropdown__title\">Children</div>\n                <div class=\"guests-dropdown__desc\">Ages 2-12</div>\n                </div>\n                <div class=\"guests-dropdown__control\">\n                <button type=\"button\" class=\"btn-minus\">-</button>\n                \n                <input type=\"number\" name=\"dropdown-adults\">\n                \n                <button type=\"button\" class=\"btn-plus\">+</button>\n                </div>\n                </div>\n                \n                </div>");
        $('.guests-dropdown__field_adults input').val($('#edit-adults').val());
        $('.guests-dropdown__field_children input').val($('#edit-children').val());
        $('#edit-adults').attr('max', 9);
        $('#edit-children').attr('max', 9);
      });
      $('#edit-guests-wrapper label').on('click', function (event) {
        event.stopPropagation();
      });
      $('.guests-dropdown .btn-minus').once().on('click', function () {
        var input = $(this).closest('.guests-dropdown__control').find('input');

        if (input.val() == 1) {
          $(this).prop('disabled', true);
        }

        if (input.val() == 9) {
          $(this).parent().find('.btn-plus').prop('disabled', false);
        }

        if (input.val() <= 0) {
          input.val(0);
        } else {
          input.val(+input.val() - +1);
        }

        $('#edit-adults').val($('.guests-dropdown__field_adults input').val());
        $('#edit-children').val($('.guests-dropdown__field_children input').val());
      });
      $('.guests-dropdown .btn-plus').once().on('click', function () {
        var input = $(this).closest('.guests-dropdown__control').find('input');

        if (input.val() <= 0) {
          $(this).parent().find('.btn-minus').prop('disabled', false);
        }

        if (input.val() == 8) {
          $(this).prop('disabled', true);
        }

        if (input.val() >= 9) {
          input.val(9);
        } else {
          input.val(+input.val() + +1);
        }

        $('#edit-adults').val($('.guests-dropdown__field_adults input').val());
        $('#edit-children').val($('.guests-dropdown__field_children input').val());
      });
      $('#edit-adults').on('change', function () {
        $('.guests-dropdown__field_adults input').val($('#edit-adults').val());
      });
      $('#edit-children').on('change', function () {
        $('.guests-dropdown__field_children input').val($('#edit-children').val());
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/header-form/select.js":
/*!*******************************************!*\
  !*** ./src/scripts/header-form/select.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.selectForm = {
    attach: function attach(context, settings) {
      $('header select').once('headerselect').each(function () {
        var _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            duration = 450;

        _this.wrap('<div class="select"></div>');

        $('<div>', {
          class: 'new-select',
          text: _this.children('option:selected').text()
        }).insertAfter(_this);

        var selectHead = _this.next('.new-select');

        $('<div>', {
          class: 'new-select__list'
        }).insertAfter('#edit-room-wrapper > input.form-submit');

        _this.remove();

        var selectList = $('#edit-room-wrapper > .new-select__list');

        for (var i = 1; i < selectOptionLength; i++) {
          $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
              text: selectOption.eq(i).text()
            })
          }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
        }

        var btnFormSea = $('.form-item-room');
        var selectItem = selectList.find('.new-select__item');
        btnFormSea.on('click', function (e) {
          selectHead.toggleClass('on');
          selectList.slideToggle(duration);
        });
        selectItem.on('click', function () {
          var chooseItem = $(this).data('value');
          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());
          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });
        $('body').on('click', function (e) {
          if ($(e.target).closest(btnFormSea).length) return;

          if (selectHead.hasClass('on')) {
            selectHead.removeClass('on');
            $('#edit-room-wrapper').removeClass('active');
            selectList.slideUp(duration);
          }
        });
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/logo/logo.js":
/*!**********************************!*\
  !*** ./src/scripts/logo/logo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.logo = {
    attach: function attach(context, settings) {
      $('.site-logo img').each(function () {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
          var $svg = $(data).find('svg');

          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
          }

          $svg = $svg.removeAttr('xmlns:a');

          if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
          }

          $img.replaceWith($svg);
        }, 'xml');
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/scripts/polyfills/index.js");
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo/logo */ "./src/scripts/logo/logo.js");
/* harmony import */ var _logo_logo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_logo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-menu/mobile-menu */ "./src/scripts/mobile-menu/mobile-menu.js");
/* harmony import */ var _mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu_mobile_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _basket_basket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket/basket */ "./src/scripts/basket/basket.js");
/* harmony import */ var _basket_basket__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_basket_basket__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/filter */ "./src/scripts/filter/filter.js");
/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_filter_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_form_guests_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-form/guests-dropdown */ "./src/scripts/header-form/guests-dropdown.js");
/* harmony import */ var _header_form_guests_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_form_guests_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header_form_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-form/select */ "./src/scripts/header-form/select.js");
/* harmony import */ var _header_form_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_form_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_form_daterange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-form/daterange */ "./src/scripts/header-form/daterange.js");
/* harmony import */ var _header_form_daterange__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_header_form_daterange__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _room_select_country__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./room/select-country */ "./src/scripts/room/select-country.js");
/* harmony import */ var _room_select_country__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_room_select_country__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _attractions_attractions_card_rout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attractions/attractions-card-rout */ "./src/scripts/attractions/attractions-card-rout.js");
/* harmony import */ var _attractions_attractions_card_rout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_attractions_attractions_card_rout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _cookie_cookie_margin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cookie/cookie-margin */ "./src/scripts/cookie/cookie-margin.js");












(function () {
  Object(_polyfills__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_cookie_cookie_margin__WEBPACK_IMPORTED_MODULE_10__["default"])();
})();

/***/ }),

/***/ "./src/scripts/mobile-menu/mobile-menu.js":
/*!************************************************!*\
  !*** ./src/scripts/mobile-menu/mobile-menu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  $(document).ready(function () {
    $(".mobile-hamburger-wrapper").click(function (e) {
      $(this).toggleClass('open');
      $(".menu-cart-wrapper").toggleClass('open');
      $("body").toggleClass('lock');
    });
  });
})(jQuery, Drupal);

/***/ }),

/***/ "./src/scripts/polyfills/index.js":
/*!****************************************!*\
  !*** ./src/scripts/polyfills/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return polyfills; });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);

function polyfills() {
  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();

  (function (e) {
    var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    !matches ? e.matches = e.matchesSelector = function matches(selector) {
      var matches = document.querySelectorAll(selector);
      var th = this;
      return Array.prototype.some.call(matches, function (e) {
        return e === th;
      });
    } : e.matches = e.matchesSelector = matches;
  })(Element.prototype);

  (function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;

      if (!this.parentElement) {
        return null;
      } else return this.parentElement.closest(selector);
    };
  })(Element.prototype);
}

/***/ }),

/***/ "./src/scripts/room/select-country.js":
/*!********************************************!*\
  !*** ./src/scripts/room/select-country.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($, Drupal) {
  Drupal.behaviors.selectCountryForm = {
    attach: function attach(context, settings) {
      $('main select').once('mainselect').each(function () {
        var _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 300;

        _this.hide();

        _this.wrap('<div class="select-country"></div>');

        $('<div>', {
          class: 'new-select-country',
          text: _this.children('option:selected').text()
        }).insertAfter(_this);

        var selectCountryHead = _this.next('.new-select-country');

        $('<div>', {
          class: 'new-select-country__list'
        }).insertAfter(selectCountryHead);
        var selectCountryList = selectCountryHead.next('.new-select-country__list');

        for (var i = 1; i < selectOptionLength; i++) {
          $('<div>', {
            class: 'new-select-country__item',
            html: $('<span>', {
              text: selectOption.eq(i).text()
            })
          }).attr('data-value', selectOption.eq(i).val()).appendTo(selectCountryList);
        }

        var selectCountryItem = selectCountryList.find('.new-select-country__item');
        selectCountryHead.once().on('click', function () {
          if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectCountryList.slideDown(duration);
            selectCountryItem.on('click', function () {
              var chooseItem = $(this).data('value');
              $('select').val(chooseItem).attr('selected', 'selected');
              selectCountryHead.text($(this).find('span').text());
              selectCountryList.slideUp(duration);
              selectCountryHead.removeClass('on');
            });
          } else {
            selectCountryHead.removeClass('on');
            selectCountryList.slideUp(duration);
          }
        });
        $('body').on('click', function (e) {
          if ($(e.target).closest(selectCountryHead).length) return;
          selectCountryHead.removeClass('on');
          selectCountryList.slideUp(duration);
        });
      });
    }
  };
})(jQuery, Drupal);

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Drupal":
/*!*************************!*\
  !*** external "Drupal" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Drupal;

/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXR0cmFjdGlvbnMvYXR0cmFjdGlvbnMtY2FyZC1yb3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Jhc2tldC9iYXNrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29va2llL2Nvb2tpZS1tYXJnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWFkZXItZm9ybS9kYXRlcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVhZGVyLWZvcm0vZ3Vlc3RzLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hlYWRlci1mb3JtL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sb2dvL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wb2x5ZmlsbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcm9vbS9zZWxlY3QtY291bnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz8xMzVkIiwid2VicGFjazovLy9leHRlcm5hbCBcIkRydXBhbFwiIl0sIm5hbWVzIjpbIiQiLCJEcnVwYWwiLCJiZWhhdmlvcnMiLCJjYXJkQXR0cmFjdGlvbnMiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJjb29yZEl0ZW1BdHRyYWN0aW9ucyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib25jZSIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm1hcEluZm8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZUluZm8iLCJmaW5kIiwiaHRtbCIsImFkZHJlc3NMYWJlbEluZm8iLCJhZGRyZXNzSW5mbyIsImNvdW50cnlJbmZvIiwiZGVzdGluYXRpb25MYWJlbEluZm8iLCJkZXN0aW5hdGlvbkluZm8iLCJsaW5rSW5mbyIsInJlbW92ZSIsImluc2VydEFkamFjZW50SFRNTCIsImpRdWVyeSIsInJlYWR5IiwibW9iaWxlQmFza2V0IiwiYWxsSXRlbXNDYXJ0IiwicXVlcnlTZWxlY3RvckFsbCIsIm1vYmlsZUNhcnRDb250YWluZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJtb2JpbGVCYXNrZXRJdGVtIiwiaXRlbSIsImluZGV4IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJiYXNrZXRJdGVtIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb29raWVNYXJnaW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29va2llQmFubmVyIiwiY29va2llQmFubmVyQnRuIiwiZm9vdGVyIiwibGVuZ3RoIiwiZmlsdGVyRWFzeUJvb2tpbmciLCJlYWNoIiwicHJlcGVuZCIsInRleHQiLCJ0b2dnbGVDbGFzcyIsIndyYXBBbGwiLCJ3cmFwIiwiY2xpY2siLCJlIiwid2lkdGgiLCJoYXNDbGFzcyIsImF0dHIiLCJhcHBlbmQiLCJjbG9uZSIsImFwcGVuZFRvIiwicHJldiIsImJsdXIiLCJub3QiLCJmb2N1cyIsInNsaWRlVXAiLCJ0YXJnZXQiLCJzbGlkZURvd24iLCJlbCIsInZhbCIsInBhcmVudCIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VzdCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiZGF0ZVJhbmdlIiwiZGF0ZXJhbmdlcGlja2VyIiwiYXV0b0FwcGx5IiwibG9jYWxlIiwiYXBwbHlMYWJlbCIsImZvcm1hdCIsInNlcGFyYXRvciIsImZpcnN0RGF5Iiwic3RhcnQiLCJlbmQiLCJzdGFydEdyYWRpZW50Q2VsbCIsImZpcnN0IiwiZW5kR3JhZGllbnRDZWxsIiwibGFzdCIsImRhdGVUaW1lUmFuZ2UiLCJ0aW1lUGlja2VyIiwibmV4dCIsImhlYWRlckZvcm0iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0Iiwic2VsZWN0Rm9ybSIsIl90aGlzIiwic2VsZWN0T3B0aW9uIiwic2VsZWN0T3B0aW9uTGVuZ3RoIiwiZHVyYXRpb24iLCJjbGFzcyIsImNoaWxkcmVuIiwiaW5zZXJ0QWZ0ZXIiLCJzZWxlY3RIZWFkIiwic2VsZWN0TGlzdCIsImVxIiwiYnRuRm9ybVNlYSIsInNlbGVjdEl0ZW0iLCJzbGlkZVRvZ2dsZSIsImNob29zZUl0ZW0iLCJkYXRhIiwibG9nbyIsIiRpbWciLCJpbWdDbGFzcyIsImltZ1VSTCIsImdldCIsIiRzdmciLCJyZW1vdmVBdHRyIiwicmVwbGFjZVdpdGgiLCJwb2x5ZmlsbHMiLCJzbW9vdGhzY3JvbGwiLCJwb2x5ZmlsbCIsIm1hdGNoZXMiLCJtYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJzZWxlY3RvciIsInRoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzb21lIiwiY2FsbCIsIkVsZW1lbnQiLCJFTEVNRU5UIiwicGFyZW50RWxlbWVudCIsInNlbGVjdENvdW50cnlGb3JtIiwic2VsZWN0ZWRPcHRpb24iLCJmaWx0ZXIiLCJoaWRlIiwic2VsZWN0Q291bnRyeUhlYWQiLCJzZWxlY3RDb3VudHJ5TGlzdCIsInNlbGVjdENvdW50cnlJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxVQUFVQSxDQUFWLEVBQWFDLE1BQWIsRUFBcUI7QUFDbEJBLFFBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsZUFBakIsR0FBbUM7QUFDL0JDLFVBQU0sRUFBRSxnQkFBVUMsT0FBVixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDakMsVUFBTUMsb0JBQW9CLEdBQUc7QUFDN0JDLGdCQUFRLEVBQUUsRUFEbUI7QUFFN0JDLGlCQUFTLEVBQUU7QUFGa0IsT0FBN0I7QUFLQVQsT0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NVLElBQWxDLEdBQXlDQyxFQUF6QyxDQUE0QyxPQUE1QyxFQUFxRCxZQUFXO0FBQzVEWCxTQUFDLENBQUMsMENBQUQsQ0FBRCxDQUE4Q1ksV0FBOUMsQ0FBMEQsUUFBMUQ7QUFDQVosU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxRQUFSLENBQWlCLFFBQWpCOztBQUlBLFlBQUliLENBQUMsQ0FBQyx3QkFBRCxDQUFMLEVBQWtDO0FBQzlCLGNBQUljLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1FQUF2QixDQUFkO0FBRUEsY0FBSUMsU0FBUyxHQUFHakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsSUFBUixDQUFhLG1EQUFiLEVBQWtFQyxJQUFsRSxFQUFoQjtBQUVBLGNBQUlDLGdCQUFnQixHQUFHcEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsSUFBUixDQUFhLHlDQUFiLEVBQXdEQyxJQUF4RCxFQUF2QjtBQUNBLGNBQUlFLFdBQVcsR0FBR3JCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYSwyQ0FBYixFQUEwREMsSUFBMUQsRUFBbEI7QUFFQSxjQUFJRyxXQUFXLEdBQUd0QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLENBQWEsMkNBQWIsRUFBMERDLElBQTFELEVBQWxCO0FBRUEsY0FBSUksb0JBQW9CLEdBQUd2QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLENBQWEsK0NBQWIsRUFBOERDLElBQTlELEVBQTNCO0FBQ0EsY0FBSUssZUFBZSxHQUFHeEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsSUFBUixDQUFhLGlEQUFiLEVBQWdFQyxJQUFoRSxFQUF0QjtBQUVBLGNBQUlNLFFBQVEsR0FBR3pCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLElBQVIsQ0FBYSx1Q0FBYixFQUFzREMsSUFBdEQsRUFBZjs7QUFFQSxjQUFJbkIsQ0FBQyxDQUFDLG1CQUFELENBQUwsRUFBNkI7QUFDekJBLGFBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCMEIsTUFBdkI7QUFDSDs7QUFFRFosaUJBQU8sQ0FBQ2Esa0JBQVIsQ0FBMkIsV0FBM0IscUhBRTZCVixTQUY3Qix1TUFLMENHLGdCQUwxQyw2SkFPNkNDLFdBUDdDLHlGQVFnREMsV0FSaEQsME5BWTBDQyxvQkFaMUMsNkpBYzZDQyxlQWQ3QztBQW1CSDtBQUNKLE9BN0NEO0FBOENIO0FBckQ4QixHQUFuQztBQXVESCxDQXhERCxFQXdER0ksTUF4REgsRUF3RFczQixNQXhEWCxFOzs7Ozs7Ozs7OztBQ0FBLENBQUMsVUFBVUQsQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQ2xCRCxHQUFDLENBQUNlLFFBQUQsQ0FBRCxDQUFZYyxLQUFaLENBQWtCLFlBQVc7QUFFekIsUUFBTUMsWUFBWSxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCOztBQUVBLFFBQUljLFlBQUosRUFBa0I7QUFDZEEsa0JBQVksQ0FBQ0gsa0JBQWIsQ0FBZ0MsWUFBaEM7QUFTQSxVQUFNSSxZQUFZLEdBQUdoQixRQUFRLENBQUNpQixnQkFBVCxDQUEwQixtREFBMUIsQ0FBckI7QUFDQSxVQUFNQyxtQkFBbUIsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBNUI7QUFFQWUsa0JBQVksQ0FBQ0csT0FBYixDQUFxQixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFFakNILDJCQUFtQixDQUFDTixrQkFBcEIsQ0FBdUMsV0FBdkM7QUFvQkEsWUFBTVUsZ0JBQWdCLEdBQUd0QixRQUFRLENBQUNpQixnQkFBVCxDQUEwQixxQ0FBMUIsQ0FBekI7QUFFQUssd0JBQWdCLENBQUNILE9BQWpCLENBQXlCLFVBQUNJLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxjQUFHQSxLQUFLLEtBQUtILENBQWIsRUFBZ0I7QUFDaEJFLGdCQUFJLENBQUN0QixhQUFMLENBQW1CLGdCQUFuQixFQUFxQ3dCLFNBQXJDLEdBQWlETCxPQUFPLENBQUNuQixhQUFSLENBQXNCLGdCQUF0QixFQUF3Q3dCLFNBQXpGO0FBQ0FGLGdCQUFJLENBQUN0QixhQUFMLENBQW1CLG1CQUFuQixFQUF3Q3dCLFNBQXhDLEdBQW9ETCxPQUFPLENBQUNuQixhQUFSLENBQXNCLG1CQUF0QixFQUEyQ3dCLFNBQS9GO0FBRUFGLGdCQUFJLENBQUN0QixhQUFMLENBQW1CLFlBQW5CLEVBQWlDd0IsU0FBakMsR0FBNkNMLE9BQU8sQ0FBQ25CLGFBQVIsQ0FBc0Isa0JBQXRCLEVBQTBDd0IsU0FBdkY7QUFFQUYsZ0JBQUksQ0FBQ3RCLGFBQUwsQ0FBbUIsZUFBbkIsRUFBb0N3QixTQUFwQyxHQUFnRHpCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwREFBdkIsRUFBbUZ3QixTQUFuSTtBQUNBRixnQkFBSSxDQUFDdEIsYUFBTCxDQUFtQixlQUFuQixFQUFvQ3dCLFNBQXBDLEdBQWdETCxPQUFPLENBQUNuQixhQUFSLENBQXNCLGtDQUF0QixFQUEwRHdCLFNBQTFHO0FBRUFGLGdCQUFJLENBQUN0QixhQUFMLENBQW1CLGNBQW5CLEVBQW1DeUIsV0FBbkMsQ0FBK0NOLE9BQU8sQ0FBQ25CLGFBQVIsQ0FBc0Isb0JBQXRCLEVBQTRDMEIsU0FBNUMsRUFBL0M7QUFDQUosZ0JBQUksQ0FBQ3RCLGFBQUwsQ0FBbUIsY0FBbkIsRUFBbUN5QixXQUFuQyxDQUErQ04sT0FBTyxDQUFDbkIsYUFBUixDQUFzQixrQ0FBdEIsRUFBMEQwQixTQUExRCxFQUEvQztBQUNDO0FBQ0osU0FiRDtBQWNILE9BdENEO0FBeUNBM0IsY0FBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixFQUE2Q3dCLFNBQTdDLEdBQXlEekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRDQUF2QixFQUFxRXdCLFNBQTlIO0FBQ0F6QixjQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDd0IsU0FBOUMsR0FBMER6QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsOENBQXZCLEVBQXVFd0IsU0FBakk7QUFDQXpCLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaUR3QixTQUFqRCxHQUE2RHpCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrREFBdkIsRUFBMkV3QixTQUF4STtBQUNIOztBQUVELFFBQU1HLFVBQVUsR0FBRzVCLFFBQVEsQ0FBQ2lCLGdCQUFULENBQTBCLHlGQUExQixDQUFuQjtBQUVBVyxjQUFVLENBQUNULE9BQVgsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLFVBQUdBLE9BQU8sQ0FBQ1MsV0FBUixLQUF3QixTQUEzQixFQUFzQztBQUNsQ1QsZUFBTyxDQUFDVSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixXQUF0QjtBQUNIO0FBQ0osS0FKRDtBQUtILEdBdEVEO0FBdUVILENBeEVELEVBd0VHbEIsTUF4RUgsRUF3RVczQixNQXhFWCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLDJFQUFNO0FBQ25CQyxrREFBUyxDQUFDNkMsWUFBVixHQUF5QjtBQUN2QjNDLFVBRHVCLG9CQUNkO0FBQ1A0QyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcEMsWUFBTUMsWUFBWSxHQUFHbkMsUUFBUSxDQUFDaUIsZ0JBQVQsQ0FBMEIsK0JBQTFCLENBQXJCO0FBQ0EsWUFBTW1CLGVBQWUsR0FBR3BDLFFBQVEsQ0FBQ2lCLGdCQUFULENBQTBCLDJFQUExQixDQUF4QjtBQUNBLFlBQU1vQixNQUFNLEdBQUdyQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjs7QUFFQSxZQUFHa0MsWUFBWSxDQUFDRyxNQUFiLEdBQXNCLENBQXpCLEVBQTRCO0FBQ3hCRCxnQkFBTSxDQUFDUCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixlQUFyQjtBQUNIOztBQUVESyx1QkFBZSxDQUFDakIsT0FBaEIsQ0FBd0IsVUFBQ0ksSUFBRCxFQUFVO0FBQzFCQSxjQUFJLENBQUNXLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDakNHLGtCQUFNLENBQUNQLFNBQVAsQ0FBaUJuQixNQUFqQixDQUF3QixlQUF4QjtBQUNILFdBRkQ7QUFHSCxTQUpMO0FBS0MsT0FkSDtBQWVEO0FBakJzQixHQUF6QjtBQW1CRCxDQXBCRCxFOzs7Ozs7Ozs7OztBQ0ZBLENBQUMsVUFBUzFCLENBQVQsRUFBWUMsTUFBWixFQUFvQjtBQUNsQkEsUUFBTSxDQUFDQyxTQUFQLENBQWlCb0QsaUJBQWpCLEdBQXFDO0FBQ2xDbEQsVUFBTSxFQUFFLGdCQUFTQyxPQUFULEVBQWtCQyxRQUFsQixFQUE0QjtBQUVqQ04sT0FBQyxDQUFDLDhFQUFELENBQUQsQ0FDQ1UsSUFERCxDQUNNLHlCQUROLEVBRUM2QyxJQUZELENBRU0sWUFBVztBQUNkdkQsU0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0Z3RCxPQUFsRixDQUNHLGdFQURIO0FBSUF4RCxTQUFDLENBQUMsb0VBQUQsQ0FBRCxDQUF3RWEsUUFBeEUsQ0FDRyxRQURIO0FBSUFiLFNBQUMsQ0FBQyxnSUFBRCxDQUFELENBQ0NtQixJQURELENBRUduQixDQUFDLENBQUMsb0ZBQUQsQ0FBRCxDQUNDeUQsSUFERCxFQUZIO0FBS0MsT0FoQko7QUFrQkd6RCxPQUFDLENBQ0UsZ0lBREYsQ0FBRCxDQUdJVSxJQUhKLEdBSUlDLEVBSkosQ0FJTyxPQUpQLEVBSWdCLFlBQVc7QUFDckJYLFNBQUMsQ0FDRSxnSUFERixDQUFELENBRUswRCxXQUZMLENBRWlCLE1BRmpCO0FBR0cxRCxTQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRDBELFdBQWpELENBQTZELE1BQTdEO0FBQ1IsT0FURDtBQVlIMUQsT0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWWMsS0FBWixDQUFrQixZQUFXO0FBQzFCLFlBQUk3QixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnFELE1BQTFCLEdBQW1DLENBQXZDLEVBQTBDO0FBQ3ZDckQsV0FBQyxDQUFDLHdDQUFELENBQUQsQ0FBNENVLElBQTVDLEdBQW1EaUQsT0FBbkQsQ0FBMkQsc0NBQTNEO0FBQ0Y7O0FBQ0QsWUFBSTNELENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDcUQsTUFBbEMsR0FBMkMsQ0FBL0MsRUFBa0Q7QUFDL0NyRCxXQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ1UsSUFBbEMsR0FBeUNrRCxJQUF6QyxDQUE4Qyx3Q0FBOUM7QUFDRjs7QUFFRDVELFNBQUMsQ0FBQyw2RUFBRCxDQUFELENBQWlGVSxJQUFqRixHQUF3Rm1ELEtBQXhGLENBQThGLFVBQVNDLENBQVQsRUFBWTtBQUV2RyxjQUFJOUQsQ0FBQyxDQUFDZ0QsTUFBRCxDQUFELENBQVVlLEtBQVYsTUFBcUIsR0FBekIsRUFBOEI7QUFFM0IsZ0JBQUcvRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRSxRQUFSLENBQWlCLFFBQWpCLENBQUgsRUFBK0I7QUFDNUJoRSxlQUFDLENBQUMsTUFBRCxDQUFELENBQVVZLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0YsYUFGRCxNQUVPO0FBQ0paLGVBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWEsUUFBVixDQUFtQixtQkFBbkI7QUFDRjs7QUFFRCxvQkFBUWIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUUsSUFBUixDQUFhLElBQWIsQ0FBUjtBQUNHLG1CQUFLLG1CQUFMO0FBQ0FqRSxpQkFBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNVLElBQXpDLEdBQWdEd0QsTUFBaEQsQ0FBdUQsaURBQXZEOztBQUVBLG9CQUFHbEUsQ0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBa0RxRCxNQUFsRCxLQUE2RCxDQUFoRSxFQUFtRTtBQUNoRXJELG1CQUFDLENBQUMsc0RBQUQsQ0FBRCxDQUEwRFUsSUFBMUQsR0FBaUV5RCxLQUFqRSxHQUF5RUMsUUFBekUsQ0FBa0YsOEJBQWxGO0FBQ0Y7O0FBRUQsb0JBQUdwRSxDQUFDLENBQUMsOENBQUQsQ0FBRCxDQUFrRHFELE1BQWxELEtBQTZELENBQWhFLEVBQW1FO0FBQ2hFckQsbUJBQUMsQ0FBQyxzREFBRCxDQUFELENBQTBEVSxJQUExRCxHQUFpRXlELEtBQWpFLEdBQXlFQyxRQUF6RSxDQUFrRiw4QkFBbEY7QUFDRjs7QUFFRDs7QUFFQSxtQkFBSyxvQkFBTDtBQUNBcEUsaUJBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDVSxJQUF6QyxHQUFnRHdELE1BQWhELENBQXVELGlEQUF2RDs7QUFFQSxvQkFBR2xFLENBQUMsQ0FBQyw4Q0FBRCxDQUFELENBQWtEcUQsTUFBbEQsS0FBNkQsQ0FBaEUsRUFBbUU7QUFDaEVyRCxtQkFBQyxDQUFDLHNEQUFELENBQUQsQ0FBMERVLElBQTFELEdBQWlFeUQsS0FBakUsR0FBeUVDLFFBQXpFLENBQWtGLDhCQUFsRjtBQUNGOztBQUVELG9CQUFHcEUsQ0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBa0RxRCxNQUFsRCxLQUE2RCxDQUFoRSxFQUFtRTtBQUNoRXJELG1CQUFDLENBQUMsc0RBQUQsQ0FBRCxDQUEwRFUsSUFBMUQsR0FBaUV5RCxLQUFqRSxHQUF5RUMsUUFBekUsQ0FBa0YsOEJBQWxGO0FBQ0Y7O0FBRUQ7O0FBRUEsbUJBQUsscUJBQUw7QUFDQXBFLGlCQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlUsSUFBdEIsR0FBNkJ3RCxNQUE3QixDQUFvQyxnREFBcEM7QUFDQTs7QUFFQSxtQkFBSyxtQkFBTDtBQUNBbEUsaUJBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCVSxJQUF2QixHQUE4QndELE1BQTlCLENBQXFDLGdEQUFyQztBQUNBbEUsaUJBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCNkQsS0FBNUIsQ0FBa0MsVUFBVUMsQ0FBVixFQUFhO0FBQzVDOUQsbUJBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCWSxXQUE1QixDQUF3QyxLQUF4QztBQUNBWixtQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxRQUFSLENBQWlCLEtBQWpCO0FBQ0YsaUJBSEQ7QUFJQTs7QUFFQTtBQUNBO0FBeENIOztBQTJDQWIsYUFBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JXLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLFVBQVNtRCxDQUFULEVBQVk7QUFDN0NBLGVBQUMsQ0FBQ08sSUFBRjtBQUNBckUsZUFBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JZLFdBQXRCLENBQWtDLFFBQWxDO0FBQ0FaLGVBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQ0NZLFdBREQsQ0FDYSxRQURiLEVBRUNBLFdBRkQsQ0FFYSxNQUZiO0FBR0YsYUFORDtBQU9GOztBQVFELGtCQUFRWixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpRSxJQUFSLENBQWEsSUFBYixDQUFSO0FBQ0csaUJBQU0sbUJBQU47QUFFQSxrQkFBSWpFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdFLFFBQVIsQ0FBaUIsUUFBakIsQ0FBSixFQUFnQztBQUk3QmhFLGlCQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ1ksV0FBckMsQ0FBaUQsUUFBakQsRUFBMkRBLFdBQTNELENBQXVFLE1BQXZFO0FBQ0FaLGlCQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLENBQWEscUJBQWIsRUFBb0NvRCxJQUFwQztBQUNBdEUsaUJBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCWSxXQUFyQixDQUFpQyxNQUFqQztBQUVGLGVBUkQsTUFRTztBQUVKWixpQkFBQyxDQUFDLGlDQUFELENBQUQsQ0FDSXVFLEdBREosQ0FDUXZFLENBQUMsQ0FBQyxJQUFELENBRFQsRUFFSVksV0FGSixDQUVnQixRQUZoQixFQUdJQyxRQUhKLENBR2EsTUFIYjtBQUtBYixpQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxXQUFSLENBQW9CLE1BQXBCO0FBQ0FaLGlCQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLFFBQVIsQ0FBaUIsUUFBakI7QUFDQWIsaUJBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCd0UsS0FBekI7QUFDQXhFLGlCQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmEsUUFBckIsQ0FBOEIsTUFBOUI7QUFDQWIsaUJBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCeUUsT0FBdEI7QUFDRjs7QUFFRDs7QUFHQSxpQkFBTSxvQkFBTjtBQUdHLGtCQUFJekUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0UsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBSTdCaEUsaUJBQUMsQ0FBQyx3Q0FBRCxDQUFELENBQTRDWSxXQUE1QyxDQUF3RCxRQUF4RCxFQUFrRUEsV0FBbEUsQ0FBOEUsTUFBOUU7QUFDQVosaUJBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCc0UsSUFBN0I7QUFDQXRFLGlCQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksV0FBdEIsQ0FBa0MsUUFBbEM7QUFDQVosaUJBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCWSxXQUE1QixDQUF3QyxNQUF4QztBQUVGLGVBVEQsTUFTTztBQU1KWixpQkFBQyxDQUFDLHlFQUFELENBQUQsQ0FBNkVZLFdBQTdFLENBQXlGLFFBQXpGLEVBQW1HQSxXQUFuRyxDQUErRyxNQUEvRztBQUdBWixpQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxRQUFSLENBQWlCLFFBQWpCO0FBQ0FiLGlCQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QndFLEtBQTdCO0FBQ0F4RSxpQkFBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JhLFFBQXRCLENBQStCLFFBQS9CO0FBQ0FiLGlCQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmEsUUFBMUIsQ0FBbUMsTUFBbkM7QUFDQWIsaUJBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCYSxRQUE1QixDQUFxQyxNQUFyQztBQUNBYixpQkFBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J5RSxPQUF0QjtBQUNGOztBQUVEOztBQUlILGlCQUFLLHFCQUFMO0FBRUEsa0JBQUl6RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRSxRQUFSLENBQWlCLFFBQWpCLENBQUosRUFBZ0M7QUFFN0Isb0JBQUcsQ0FBQ2hFLENBQUMsQ0FBQzhELENBQUMsQ0FBQ1ksTUFBSCxDQUFELENBQVlWLFFBQVosQ0FBcUIsV0FBckIsQ0FBRCxJQUFzQyxDQUFDaEUsQ0FBQyxDQUFDOEQsQ0FBQyxDQUFDWSxNQUFILENBQUQsQ0FBWVYsUUFBWixDQUFxQixVQUFyQixDQUExQyxFQUE0RTtBQUV6RWhFLG1CQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnlFLE9BQXRCO0FBQ0F6RSxtQkFBQyxDQUFDLHlFQUFELENBQUQsQ0FBNkVZLFdBQTdFLENBQXlGLFFBQXpGLEVBQW1HQSxXQUFuRyxDQUErRyxNQUEvRztBQUNBWixtQkFBQyxDQUFDLHlDQUFELENBQUQsQ0FBNkNZLFdBQTdDLENBQXlELE1BQXpEO0FBQ0Y7QUFFSCxlQVRELE1BU087QUFDSlosaUJBQUMsQ0FBQyx5RUFBRCxDQUFELENBQTZFWSxXQUE3RSxDQUF5RixRQUF6RixFQUFtR0EsV0FBbkcsQ0FBK0csTUFBL0c7QUFDQVosaUJBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsUUFBUixDQUFpQixRQUFqQjtBQUNBYixpQkFBQyxDQUFDLHlDQUFELENBQUQsQ0FBNkNhLFFBQTdDLENBQXNELE1BQXREO0FBQ0FiLGlCQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjJFLFNBQXRCO0FBQ0EzRSxpQkFBQyxDQUFDLHlDQUFELENBQUQsQ0FBNkNhLFFBQTdDLENBQXNELE1BQXREO0FBSUFiLGlCQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QnVELElBQTVCLENBQWlDLFVBQVVoQixLQUFWLEVBQWlCcUMsRUFBakIsRUFBcUI7QUFFbkQsc0JBQUc1RSxDQUFDLENBQUM0RSxFQUFELENBQUQsQ0FBTUMsR0FBTixNQUFlLENBQWxCLEVBQXFCO0FBQ2xCN0UscUJBQUMsQ0FBQzRFLEVBQUQsQ0FBRCxDQUFNRSxNQUFOLEdBQWU1RCxJQUFmLENBQW9CLFlBQXBCLEVBQWtDNkQsSUFBbEMsQ0FBdUMsVUFBdkMsRUFBbUQsSUFBbkQ7QUFDRjs7QUFFRCxzQkFBSS9FLENBQUMsQ0FBQzRFLEVBQUQsQ0FBRCxDQUFNQyxHQUFOLE1BQWUsQ0FBbkIsRUFBc0I7QUFDbkI3RSxxQkFBQyxDQUFDNEUsRUFBRCxDQUFELENBQU1FLE1BQU4sR0FBZTVELElBQWYsQ0FBb0IsV0FBcEIsRUFBaUM2RCxJQUFqQyxDQUFzQyxVQUF0QyxFQUFrRCxJQUFsRDtBQUNGO0FBQ0gsaUJBVEQ7QUFVRjs7QUFFRDs7QUFJQSxpQkFBSyxtQkFBTDtBQUVBLGtCQUFJL0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0UsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQzdCaEUsaUJBQUMsQ0FBQyx5RUFBRCxDQUFELENBQTZFWSxXQUE3RSxDQUF5RixRQUF6RixFQUFtR0EsV0FBbkcsQ0FBK0csTUFBL0csRUFBdUgwRCxJQUF2SDtBQUNBdEUsaUJBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDWSxXQUE3QyxDQUF5RCxNQUF6RDtBQUNGLGVBSEQsTUFHTztBQUNKWixpQkFBQyxDQUFDLHlFQUFELENBQUQsQ0FBNkVZLFdBQTdFLENBQXlGLFFBQXpGLEVBQW1HQSxXQUFuRyxDQUErRyxNQUEvRztBQUNBWixpQkFBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J5RSxPQUF0QjtBQUVBekUsaUJBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsUUFBUixDQUFpQixRQUFqQjtBQUVBYixpQkFBQyxDQUFDLGlDQUFELENBQUQsQ0FDSXVFLEdBREosQ0FDUXZFLENBQUMsQ0FBQyxJQUFELENBRFQsRUFFSWEsUUFGSixDQUVhLE1BRmI7QUFJQWIsaUJBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDYSxRQUE3QyxDQUFzRCxNQUF0RDtBQUNGOztBQUVEOztBQUlBO0FBQ0dtRSxxQkFBTyxDQUFDQyxHQUFSLENBQVlqRixDQUFDLENBQUMsSUFBRCxDQUFiLEVBQXFCLGNBQXJCO0FBQ0g7QUF6SEg7QUEySEYsU0EvTEQ7QUFnTUYsT0F4TUQ7QUEyTUFBLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVcsRUFBVixDQUFhLE9BQWIsRUFBc0IsVUFBU21ELENBQVQsRUFBWTtBQUMvQixZQUFJOUQsQ0FBQyxDQUFDOEQsQ0FBQyxDQUFDWSxNQUFILENBQUQsQ0FBWVEsT0FBWixDQUFvQixpQkFBcEIsRUFBdUM3QixNQUF2QyxJQUFpRCxDQUFqRCxJQUFzRHJELENBQUMsQ0FBQzhELENBQUMsQ0FBQ1ksTUFBSCxDQUFELENBQVlRLE9BQVosQ0FBb0IsNEJBQXBCLEVBQWtEN0IsTUFBbEQsSUFBNEQsQ0FBdEgsRUFBeUg7QUFFdEhyRCxXQUFDLENBQUMseUVBQUQsQ0FBRCxDQUE2RVksV0FBN0UsQ0FBeUYsUUFBekYsRUFBbUdBLFdBQW5HLENBQStHLE1BQS9HO0FBQ0FaLFdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCeUUsT0FBdEI7QUFFQXpFLFdBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDWSxXQUE3QyxDQUF5RCxNQUF6RDtBQUNBWixXQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QlksV0FBeEIsQ0FBb0MsV0FBcEM7O0FBRUEsY0FBSVosQ0FBQyxDQUFDZ0QsTUFBRCxDQUFELENBQVVlLEtBQVYsTUFBcUIsR0FBekIsRUFBOEI7QUFDM0IvRCxhQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLFdBQVIsQ0FBb0IsbUJBQXBCO0FBQ0Y7QUFDSDtBQUNILE9BYkQ7QUFpQkFaLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCVyxFQUExQixDQUE2QjtBQUMxQndFLGtCQUFVLEVBQUUsc0JBQVk7QUFDckJuRixXQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmEsUUFBeEIsQ0FBaUMsV0FBakM7QUFDRixTQUh5QjtBQUkxQnVFLGtCQUFVLEVBQUUsc0JBQVk7QUFDckJwRixXQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QlksV0FBeEIsQ0FBb0MsV0FBcEM7QUFDRjtBQU55QixPQUE3QjtBQVVBWixPQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ21GLFVBQXJDLENBQWdELFlBQVk7QUFDekQsWUFBSW5GLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCZ0UsUUFBeEIsQ0FBaUMsUUFBakMsQ0FBSixFQUFpRDtBQUM5Q2hFLFdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCYSxRQUExQixDQUFtQyxZQUFuQztBQUNGLFNBRkQsTUFFTztBQUNKYixXQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlksV0FBMUIsQ0FBc0MsWUFBdEM7QUFDRjtBQUNILE9BTkQ7QUFRRjtBQS9RaUMsR0FBckM7QUFpUkYsQ0FsUkQsRUFrUkdnQixNQWxSSCxFQWtSVzNCLE1BbFJYLEU7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxVQUFTRCxDQUFULEVBQVlDLE1BQVosRUFBb0I7QUFDbkJBLFFBQU0sQ0FBQ0MsU0FBUCxDQUFpQm1GLFNBQWpCLEdBQTZCO0FBQzNCakYsVUFBTSxFQUFFLGdCQUFTQyxPQUFULEVBQWtCQyxRQUFsQixFQUE0QjtBQUNsQ04sT0FBQyxDQUFDLFlBQVc7QUFDWEEsU0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNzRixlQUFqQyxDQUFpRDtBQUMvQ0MsbUJBQVMsRUFBRSxJQURvQztBQUUvQ0MsZ0JBQU0sRUFBRTtBQUNOQyxzQkFBVSxFQUFFLFFBRE47QUFFTkMsa0JBQU0sRUFBRSxZQUZGO0FBR05DLHFCQUFTLEVBQUUsS0FITDtBQUlOQyxvQkFBUSxFQUFFLENBSko7QUFLTix5QkFBYSxHQUxQO0FBTU4sMEJBQWMsQ0FDWixLQURZLEVBRVosS0FGWSxFQUdaLEtBSFksRUFJWixLQUpZLEVBS1osS0FMWSxFQU1aLEtBTlksRUFPWixLQVBZLENBTlI7QUFlUiwwQkFBYyxDQUNWLFNBRFUsRUFFVixVQUZVLEVBR1YsT0FIVSxFQUlWLE9BSlUsRUFLVixLQUxVLEVBTVYsTUFOVSxFQU9WLE1BUFUsRUFRVixRQVJVLEVBU1YsV0FUVSxFQVVWLFNBVlUsRUFXVixVQVhVLEVBWVYsVUFaVTtBQWZOO0FBRnVDLFNBQWpELEVBaUNFLFVBQVNDLEtBQVQsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ25COUYsV0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI2RSxHQUE1QixDQUFnQ2dCLEtBQUssQ0FBQ0gsTUFBTixDQUFhLFlBQWIsQ0FBaEM7QUFDQTFGLFdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCNkUsR0FBMUIsQ0FBOEJpQixHQUFHLENBQUNKLE1BQUosQ0FBVyxZQUFYLENBQTlCO0FBQ0QsU0FwQ0g7QUFzQ0ExRixTQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ1csRUFBakMsQ0FBb0Msc0JBQXBDLEVBQTRELFlBQVc7QUFDckVYLFdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCYSxRQUF0QixDQUErQixRQUEvQjtBQUVELFNBSEQ7QUFLQWIsU0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNXLEVBQWpDLENBQW9DLHNCQUFwQyxFQUE0RCxZQUFXO0FBQ3JFWCxXQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlksV0FBdEIsQ0FBa0MsUUFBbEM7QUFDRCxTQUZEO0FBSUFaLFNBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDVyxFQUFqQyxDQUFvQyw4QkFBcEMsRUFBb0UsWUFBVztBQUM3RSxjQUNFWCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3FELE1BQWhDLEdBQXlDLENBQXpDLElBQ0EsQ0FBQ3JELENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDZ0UsUUFBaEMsQ0FBeUMsWUFBekMsQ0FGSCxFQUdFO0FBRUFoRSxhQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUNHcUUsSUFESCxHQUVHeEQsUUFGSCxDQUVZLGVBRlo7QUFJQSxnQkFBSWtGLGlCQUFpQixHQUFHL0YsQ0FBQyxDQUFDLDhFQUFELENBQUQsQ0FBa0Z1RSxHQUFsRixDQUFzRixNQUF0RixFQUE4RkEsR0FBOUYsQ0FBa0csU0FBbEcsRUFBNkd5QixLQUE3RyxFQUF4QjtBQUNBRCw2QkFBaUIsQ0FBQ2xGLFFBQWxCLENBQTJCLG9CQUEzQjtBQUdBLGdCQUFJb0YsZUFBZSxHQUFHakcsQ0FBQyxDQUFDLDZFQUFELENBQUQsQ0FBaUZ1RSxHQUFqRixDQUFxRixNQUFyRixFQUE2RkEsR0FBN0YsQ0FBaUcsU0FBakcsRUFBNEcyQixJQUE1RyxFQUF0QjtBQUNBRCwyQkFBZSxDQUFDcEYsUUFBaEIsQ0FBeUIsbUJBQXpCO0FBRUQ7QUFDRixTQWxCRDtBQW9CQWIsU0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNXLEVBQWpDLENBQW9DLHVCQUFwQyxFQUE2RCxZQUFXO0FBQ3RFWCxXQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QlksV0FBeEIsQ0FBb0MsUUFBcEM7QUFDQVosV0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVWSxXQUFWLENBQXNCLG1CQUF0QjtBQUNELFNBSEQ7QUFJRCxPQXhFQSxDQUFEO0FBeUVEO0FBM0UwQixHQUE3QjtBQTZFQVgsUUFBTSxDQUFDQyxTQUFQLENBQWlCaUcsYUFBakIsR0FBaUM7QUFDL0IvRixVQUFNLEVBQUUsZ0JBQVNDLE9BQVQsRUFBa0JDLFFBQWxCLEVBQTRCO0FBQ2xDTixPQUFDLENBQUMsWUFBVztBQUNYQSxTQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ3NGLGVBQXJDLENBQXFEO0FBQ2pEQyxtQkFBUyxFQUFFLElBRHNDO0FBRWpEYSxvQkFBVSxFQUFFLElBRnFDO0FBR2pEWixnQkFBTSxFQUFFO0FBQ05DLHNCQUFVLEVBQUUsUUFETjtBQUVOQyxrQkFBTSxFQUFFLHFCQUZGO0FBR05DLHFCQUFTLEVBQUUsS0FITDtBQUlOQyxvQkFBUSxFQUFFLENBSko7QUFLTix5QkFBYSxHQUxQO0FBTU4sMEJBQWMsQ0FDWixLQURZLEVBRVosS0FGWSxFQUdaLEtBSFksRUFJWixLQUpZLEVBS1osS0FMWSxFQU1aLEtBTlksRUFPWixLQVBZLENBTlI7QUFlTiwwQkFBYyxDQUNaLFNBRFksRUFFWixVQUZZLEVBR1osT0FIWSxFQUlaLE9BSlksRUFLWixLQUxZLEVBTVosTUFOWSxFQU9aLE1BUFksRUFRWixRQVJZLEVBU1osV0FUWSxFQVVaLFNBVlksRUFXWixVQVhZLEVBWVosVUFaWTtBQWZSO0FBSHlDLFNBQXJELEVBa0NFLFVBQVNDLEtBQVQsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ25COUYsV0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkI2RSxHQUEzQixDQUErQmdCLEtBQUssQ0FBQ0gsTUFBTixDQUFhLFlBQWIsQ0FBL0I7QUFDQTFGLFdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCNkUsR0FBekIsQ0FBNkJpQixHQUFHLENBQUNKLE1BQUosQ0FBVyxZQUFYLENBQTdCO0FBQ0ExRixXQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjZFLEdBQTNCLENBQStCZ0IsS0FBSyxDQUFDSCxNQUFOLENBQWEsVUFBYixDQUEvQjtBQUNBMUYsV0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI2RSxHQUF6QixDQUE2QmlCLEdBQUcsQ0FBQ0osTUFBSixDQUFXLFVBQVgsQ0FBN0I7QUFDRCxTQXZDSDtBQXlDQTFGLFNBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDVyxFQUFyQyxDQUF3QyxzQkFBeEMsRUFBZ0UsWUFBVztBQUN6RVgsV0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JhLFFBQXRCLENBQStCLFFBQS9CO0FBRUQsU0FIRDtBQUtBYixTQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ1csRUFBckMsQ0FBd0Msc0JBQXhDLEVBQWdFLFlBQVc7QUFDekVYLFdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCWSxXQUF0QixDQUFrQyxRQUFsQztBQUNELFNBRkQ7QUFJQVosU0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNXLEVBQXJDLENBQXdDLDhCQUF4QyxFQUF3RSxZQUFXO0FBQ2pGLGNBQ0VYLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDcUQsTUFBaEMsR0FBeUMsQ0FBekMsSUFDQSxDQUFDckQsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NnRSxRQUFoQyxDQUF5QyxZQUF6QyxDQUZILEVBR0U7QUFDQWhFLGFBQUMsQ0FBQyw0QkFBRCxDQUFELENBQ0dxRSxJQURILEdBRUd4RCxRQUZILENBRVksZUFGWjtBQUlBYixhQUFDLENBQUMsb0RBQUQsQ0FBRCxDQUNHcUUsSUFESCxHQUVHeEQsUUFGSCxDQUVZLG1CQUZaO0FBSUFiLGFBQUMsQ0FBQyxtREFBRCxDQUFELENBQ0dxRyxJQURILEdBRUd4RixRQUZILENBRVksb0JBRlo7QUFHRDtBQUNGLFNBakJEO0FBbUJBYixTQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ1csRUFBckMsQ0FBd0MsdUJBQXhDLEVBQWlFLFlBQVc7QUFDMUVYLFdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCWSxXQUF6QixDQUFxQyxRQUFyQztBQUVELFNBSEQ7QUFJRCxPQTFFQSxDQUFEO0FBMkVEO0FBN0U4QixHQUFqQztBQStFRCxDQTdKRCxFQTZKR2dCLE1BN0pILEVBNkpXM0IsTUE3SlgsRTs7Ozs7Ozs7Ozs7QUNBQSxDQUFDLFVBQVNELENBQVQsRUFBWUMsTUFBWixFQUFvQjtBQUNqQkEsUUFBTSxDQUFDQyxTQUFQLENBQWlCb0csVUFBakIsR0FBOEI7QUFDMUJsRyxVQUFNLEVBQUUsZ0JBQVNDLE9BQVQsRUFBa0JDLFFBQWxCLEVBQTRCO0FBQ2hDLFVBQU1nRyxVQUFVLEdBQUcsRUFBbkI7QUFFQXRHLE9BQUMsQ0FBQyxvRUFBRCxDQUFELENBQ0NVLElBREQsQ0FDTSxpQkFETixFQUVDNkMsSUFGRCxDQUVNLFlBQVc7QUFDYnZELFNBQUMsQ0FBQyxvRUFBRCxDQUFELENBQXdFd0QsT0FBeEU7QUFpQ0F4RCxTQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQzZFLEdBQTFDLENBQThDN0UsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjZFLEdBQWxCLEVBQTlDO0FBQ0E3RSxTQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0QzZFLEdBQTVDLENBQWdEN0UsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I2RSxHQUFwQixFQUFoRDtBQUVBN0UsU0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmlFLElBQWxCLENBQXVCLEtBQXZCLEVBQThCLENBQTlCO0FBQ0FqRSxTQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmlFLElBQXBCLENBQXlCLEtBQXpCLEVBQWdDLENBQWhDO0FBQ0gsT0F6Q0Q7QUEyQ0FqRSxPQUFDLENBQUMsaURBQUQsQ0FBRCxDQUNDVSxJQURELENBQ00saUJBRE4sRUFFQzZDLElBRkQsQ0FFTSxZQUFXO0FBQ2J2RCxTQUFDLENBQUMsaURBQUQsQ0FBRCxDQUFxRHdELE9BQXJEO0FBaUNBeEQsU0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEM2RSxHQUExQyxDQUE4QzdFLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I2RSxHQUFsQixFQUE5QztBQUNBN0UsU0FBQyxDQUFDLHdDQUFELENBQUQsQ0FBNEM2RSxHQUE1QyxDQUFnRDdFLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CNkUsR0FBcEIsRUFBaEQ7QUFFQTdFLFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JpRSxJQUFsQixDQUF1QixLQUF2QixFQUE4QixDQUE5QjtBQUNBakUsU0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpRSxJQUFwQixDQUF5QixLQUF6QixFQUFnQyxDQUFoQztBQUNILE9BekNEO0FBMkNBakUsT0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NXLEVBQWhDLENBQW1DLE9BQW5DLEVBQTRDLFVBQVM0RixLQUFULEVBQWdCO0FBQ3hEQSxhQUFLLENBQUNDLGVBQU47QUFDSCxPQUZEO0FBSUF4RyxPQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUNDVSxJQURELEdBRUNDLEVBRkQsQ0FFSSxPQUZKLEVBRWEsWUFBVztBQUNwQixZQUFJOEYsS0FBSyxHQUFHekcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNYa0YsT0FEVyxDQUNILDJCQURHLEVBRVhoRSxJQUZXLENBRU4sT0FGTSxDQUFaOztBQUlBLFlBQUl1RixLQUFLLENBQUM1QixHQUFOLE1BQWUsQ0FBbkIsRUFBc0I7QUFFbEI3RSxXQUFDLENBQUMsSUFBRCxDQUFELENBQVErRSxJQUFSLENBQWEsVUFBYixFQUF5QixJQUF6QjtBQUNIOztBQUVELFlBQUkwQixLQUFLLENBQUM1QixHQUFOLE1BQWUsQ0FBbkIsRUFBc0I7QUFDbEI3RSxXQUFDLENBQUMsSUFBRCxDQUFELENBQ0M4RSxNQURELEdBRUM1RCxJQUZELENBRU0sV0FGTixFQUdDNkQsSUFIRCxDQUdNLFVBSE4sRUFHa0IsS0FIbEI7QUFJSDs7QUFFRCxZQUFJMEIsS0FBSyxDQUFDNUIsR0FBTixNQUFlLENBQW5CLEVBQXNCO0FBQ2xCNEIsZUFBSyxDQUFDNUIsR0FBTixDQUFVLENBQVY7QUFDSCxTQUZELE1BRU87QUFDSDRCLGVBQUssQ0FBQzVCLEdBQU4sQ0FBVSxDQUFDNEIsS0FBSyxDQUFDNUIsR0FBTixFQUFELEdBQWUsQ0FBQyxDQUExQjtBQUNIOztBQUVEN0UsU0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjZFLEdBQWxCLENBQXNCN0UsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEM2RSxHQUExQyxFQUF0QjtBQUNBN0UsU0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I2RSxHQUFwQixDQUF3QjdFLENBQUMsQ0FBQyx3Q0FBRCxDQUFELENBQTRDNkUsR0FBNUMsRUFBeEI7QUFDSCxPQTNCRDtBQTZCQTdFLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQ0NVLElBREQsR0FFQ0MsRUFGRCxDQUVJLE9BRkosRUFFYSxZQUFXO0FBQ3BCLFlBQUk4RixLQUFLLEdBQUd6RyxDQUFDLENBQUMsSUFBRCxDQUFELENBQ1hrRixPQURXLENBQ0gsMkJBREcsRUFFWGhFLElBRlcsQ0FFTixPQUZNLENBQVo7O0FBSUEsWUFBSXVGLEtBQUssQ0FBQzVCLEdBQU4sTUFBZSxDQUFuQixFQUFzQjtBQUVsQjdFLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FDQzhFLE1BREQsR0FFQzVELElBRkQsQ0FFTSxZQUZOLEVBR0M2RCxJQUhELENBR00sVUFITixFQUdrQixLQUhsQjtBQUlIOztBQUVELFlBQUkwQixLQUFLLENBQUM1QixHQUFOLE1BQWUsQ0FBbkIsRUFBc0I7QUFDbEI3RSxXQUFDLENBQUMsSUFBRCxDQUFELENBQVErRSxJQUFSLENBQWEsVUFBYixFQUF5QixJQUF6QjtBQUNIOztBQUVELFlBQUkwQixLQUFLLENBQUM1QixHQUFOLE1BQWUsQ0FBbkIsRUFBc0I7QUFDbEI0QixlQUFLLENBQUM1QixHQUFOLENBQVUsQ0FBVjtBQUNILFNBRkQsTUFFTztBQUNINEIsZUFBSyxDQUFDNUIsR0FBTixDQUFVLENBQUM0QixLQUFLLENBQUM1QixHQUFOLEVBQUQsR0FBZSxDQUFDLENBQTFCO0FBQ0g7O0FBRUQ3RSxTQUFDLENBQUMsY0FBRCxDQUFELENBQWtCNkUsR0FBbEIsQ0FBc0I3RSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQzZFLEdBQTFDLEVBQXRCO0FBQ0E3RSxTQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjZFLEdBQXBCLENBQXdCN0UsQ0FBQyxDQUFDLHdDQUFELENBQUQsQ0FBNEM2RSxHQUE1QyxFQUF4QjtBQUNILE9BM0JEO0FBNkJBN0UsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQlcsRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsWUFBVztBQUN0Q1gsU0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEM2RSxHQUExQyxDQUE4QzdFLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I2RSxHQUFsQixFQUE5QztBQUNILE9BRkQ7QUFJQTdFLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CVyxFQUFwQixDQUF1QixRQUF2QixFQUFpQyxZQUFXO0FBQ3hDWCxTQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0QzZFLEdBQTVDLENBQWdEN0UsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I2RSxHQUFwQixFQUFoRDtBQUNILE9BRkQ7QUFHSDtBQS9KeUIsR0FBOUI7QUFpS0gsQ0FsS0QsRUFrS0dqRCxNQWxLSCxFQWtLVzNCLE1BbEtYLEU7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxVQUFVRCxDQUFWLEVBQWFDLE1BQWIsRUFBcUI7QUFDbEJBLFFBQU0sQ0FBQ0MsU0FBUCxDQUFpQndHLFVBQWpCLEdBQThCO0FBQzFCdEcsVUFBTSxFQUFFLGdCQUFVQyxPQUFWLEVBQW1CQyxRQUFuQixFQUE2QjtBQUVqQ04sT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlUsSUFBbkIsQ0FBd0IsY0FBeEIsRUFBd0M2QyxJQUF4QyxDQUE2QyxZQUFXO0FBQ3BELFlBQU1vRCxLQUFLLEdBQUczRyxDQUFDLENBQUMsSUFBRCxDQUFmO0FBQUEsWUFDQTRHLFlBQVksR0FBR0QsS0FBSyxDQUFDekYsSUFBTixDQUFXLFFBQVgsQ0FEZjtBQUFBLFlBRUEyRixrQkFBa0IsR0FBR0QsWUFBWSxDQUFDdkQsTUFGbEM7QUFBQSxZQUlBeUQsUUFBUSxHQUFHLEdBSlg7O0FBTUFILGFBQUssQ0FBQy9DLElBQU4sQ0FBVyw0QkFBWDs7QUFFQTVELFNBQUMsQ0FBQyxPQUFELEVBQVU7QUFDUCtHLGVBQUssRUFBRSxZQURBO0FBRVB0RCxjQUFJLEVBQUVrRCxLQUFLLENBQUNLLFFBQU4sQ0FBZSxpQkFBZixFQUFrQ3ZELElBQWxDO0FBRkMsU0FBVixDQUFELENBR0d3RCxXQUhILENBR2VOLEtBSGY7O0FBS0EsWUFBTU8sVUFBVSxHQUFHUCxLQUFLLENBQUNOLElBQU4sQ0FBVyxhQUFYLENBQW5COztBQUVBckcsU0FBQyxDQUFDLE9BQUQsRUFBVTtBQUNQK0csZUFBSyxFQUFFO0FBREEsU0FBVixDQUFELENBRUdFLFdBRkgsQ0FFZSx3Q0FGZjs7QUFJQU4sYUFBSyxDQUFDakYsTUFBTjs7QUFFQSxZQUFNeUYsVUFBVSxHQUFHbkgsQ0FBQyxDQUFDLHdDQUFELENBQXBCOztBQUVBLGFBQUssSUFBSW9DLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5RSxrQkFBcEIsRUFBd0N6RSxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDcEMsV0FBQyxDQUFDLE9BQUQsRUFBVTtBQUNQK0csaUJBQUssRUFBRSxrQkFEQTtBQUVQNUYsZ0JBQUksRUFBRW5CLENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDZHlELGtCQUFJLEVBQUVtRCxZQUFZLENBQUNRLEVBQWIsQ0FBZ0JoRixDQUFoQixFQUFtQnFCLElBQW5CO0FBRFEsYUFBWDtBQUZBLFdBQVYsQ0FBRCxDQU1DUSxJQU5ELENBTU0sWUFOTixFQU1vQjJDLFlBQVksQ0FBQ1EsRUFBYixDQUFnQmhGLENBQWhCLEVBQW1CeUMsR0FBbkIsRUFOcEIsRUFPQ1QsUUFQRCxDQU9VK0MsVUFQVjtBQVFIOztBQUVELFlBQU1FLFVBQVUsR0FBR3JILENBQUMsQ0FBQyxpQkFBRCxDQUFwQjtBQUVBLFlBQU1zSCxVQUFVLEdBQUdILFVBQVUsQ0FBQ2pHLElBQVgsQ0FBZ0IsbUJBQWhCLENBQW5CO0FBRUFtRyxrQkFBVSxDQUFDMUcsRUFBWCxDQUFjLE9BQWQsRUFBdUIsVUFBU21ELENBQVQsRUFBWTtBQUMvQm9ELG9CQUFVLENBQUN4RCxXQUFYLENBQXVCLElBQXZCO0FBQ0F5RCxvQkFBVSxDQUFDSSxXQUFYLENBQXVCVCxRQUF2QjtBQUVILFNBSkQ7QUFNQVEsa0JBQVUsQ0FBQzNHLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVc7QUFDOUIsY0FBSTZHLFVBQVUsR0FBR3hILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlILElBQVIsQ0FBYSxPQUFiLENBQWpCO0FBRUF6SCxXQUFDLENBQUMsUUFBRCxDQUFELENBQVk2RSxHQUFaLENBQWdCMkMsVUFBaEIsRUFBNEJ2RCxJQUE1QixDQUFpQyxVQUFqQyxFQUE2QyxVQUE3QztBQUNBaUQsb0JBQVUsQ0FBQ3pELElBQVgsQ0FBaUJ6RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLENBQWEsTUFBYixFQUFxQnVDLElBQXJCLEVBQWpCO0FBRUEwRCxvQkFBVSxDQUFDMUMsT0FBWCxDQUFtQnFDLFFBQW5CO0FBQ0FJLG9CQUFVLENBQUN0RyxXQUFYLENBQXVCLElBQXZCO0FBQ0gsU0FSRDtBQVVBWixTQUFDLENBQUMsTUFBRCxDQUFELENBQVVXLEVBQVYsQ0FBYyxPQUFkLEVBQXVCLFVBQVNtRCxDQUFULEVBQVk7QUFDL0IsY0FBSTlELENBQUMsQ0FBQzhELENBQUMsQ0FBQ1ksTUFBSCxDQUFELENBQVlRLE9BQVosQ0FBb0JtQyxVQUFwQixFQUFnQ2hFLE1BQXBDLEVBQ0k7O0FBRUosY0FBRzZELFVBQVUsQ0FBQ2xELFFBQVgsQ0FBb0IsSUFBcEIsQ0FBSCxFQUE4QjtBQUMxQmtELHNCQUFVLENBQUN0RyxXQUFYLENBQXVCLElBQXZCO0FBQ0FaLGFBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCWSxXQUF4QixDQUFvQyxRQUFwQztBQUNBdUcsc0JBQVUsQ0FBQzFDLE9BQVgsQ0FBbUJxQyxRQUFuQjtBQUVIO0FBQ0osU0FWRDtBQVdILE9BbEVEO0FBbUVIO0FBdEV5QixHQUE5QjtBQXdFSCxDQXpFRCxFQXlFR2xGLE1BekVILEVBeUVXM0IsTUF6RVgsRTs7Ozs7Ozs7Ozs7QUNBQSxDQUFDLFVBQVVELENBQVYsRUFBYUMsTUFBYixFQUFxQjtBQUNsQkEsUUFBTSxDQUFDQyxTQUFQLENBQWlCd0gsSUFBakIsR0FBd0I7QUFDcEJ0SCxVQUFNLEVBQUUsZ0JBQVVDLE9BQVYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQ25DTixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnVELElBQXBCLENBQXlCLFlBQVU7QUFDakMsWUFBSW9FLElBQUksR0FBRzNILENBQUMsQ0FBQyxJQUFELENBQVo7QUFDQSxZQUFJNEgsUUFBUSxHQUFHRCxJQUFJLENBQUMxRCxJQUFMLENBQVUsT0FBVixDQUFmO0FBQ0EsWUFBSTRELE1BQU0sR0FBR0YsSUFBSSxDQUFDMUQsSUFBTCxDQUFVLEtBQVYsQ0FBYjtBQUNBakUsU0FBQyxDQUFDOEgsR0FBRixDQUFNRCxNQUFOLEVBQWMsVUFBU0osSUFBVCxFQUFlO0FBQzNCLGNBQUlNLElBQUksR0FBRy9ILENBQUMsQ0FBQ3lILElBQUQsQ0FBRCxDQUFRdkcsSUFBUixDQUFhLEtBQWIsQ0FBWDs7QUFDQSxjQUFHLE9BQU8wRyxRQUFQLEtBQW9CLFdBQXZCLEVBQW9DO0FBQ2xDRyxnQkFBSSxHQUFHQSxJQUFJLENBQUM5RCxJQUFMLENBQVUsT0FBVixFQUFtQjJELFFBQVEsR0FBQyxlQUE1QixDQUFQO0FBQ0Q7O0FBQ0RHLGNBQUksR0FBR0EsSUFBSSxDQUFDQyxVQUFMLENBQWdCLFNBQWhCLENBQVA7O0FBQ0EsY0FBRyxDQUFDRCxJQUFJLENBQUM5RCxJQUFMLENBQVUsU0FBVixDQUFELElBQXlCOEQsSUFBSSxDQUFDOUQsSUFBTCxDQUFVLFFBQVYsQ0FBekIsSUFBZ0Q4RCxJQUFJLENBQUM5RCxJQUFMLENBQVUsT0FBVixDQUFuRCxFQUF1RTtBQUNyRThELGdCQUFJLENBQUM5RCxJQUFMLENBQVUsU0FBVixFQUFxQixTQUFTOEQsSUFBSSxDQUFDOUQsSUFBTCxDQUFVLFFBQVYsQ0FBVCxHQUErQixHQUEvQixHQUFxQzhELElBQUksQ0FBQzlELElBQUwsQ0FBVSxPQUFWLENBQTFEO0FBQ0Q7O0FBQ0QwRCxjQUFJLENBQUNNLFdBQUwsQ0FBaUJGLElBQWpCO0FBQ0QsU0FWRCxFQVVHLEtBVkg7QUFXRCxPQWZEO0FBZ0JEO0FBbEJtQixHQUF4QjtBQW9CSCxDQXJCRCxFQXFCR25HLE1BckJILEVBcUJXM0IsTUFyQlgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFlBQU07QUFDTGlJLDREQUFTO0FBQ1RuRix3RUFBWTtBQUNiLENBSEQsSTs7Ozs7Ozs7Ozs7QUNaQSxDQUFDLFVBQVUvQyxDQUFWLEVBQWFDLE1BQWIsRUFBcUI7QUFDcEJELEdBQUMsQ0FBQ2UsUUFBRCxDQUFELENBQVljLEtBQVosQ0FBa0IsWUFBVztBQUMzQjdCLEtBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCNkQsS0FBL0IsQ0FBcUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzlDOUQsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEQsV0FBUixDQUFvQixNQUFwQjtBQUNBMUQsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IwRCxXQUF4QixDQUFvQyxNQUFwQztBQUNBMUQsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMEQsV0FBVixDQUFzQixNQUF0QjtBQUNELEtBSkQ7QUFLRCxHQU5EO0FBT0QsQ0FSRCxFQVFHOUIsTUFSSCxFQVFXM0IsTUFSWCxFOzs7Ozs7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU2lJLFNBQVQsR0FBcUI7QUFDbENDLDhEQUFZLENBQUNDLFFBQWI7O0FBS0UsR0FBQyxVQUFVdEUsQ0FBVixFQUFhO0FBQ1osUUFBSXVFLE9BQU8sR0FBR3ZFLENBQUMsQ0FBQ3VFLE9BQUYsSUFBYXZFLENBQUMsQ0FBQ3dFLGVBQWYsSUFBa0N4RSxDQUFDLENBQUN5RSxxQkFBcEMsSUFBNkR6RSxDQUFDLENBQUMwRSxrQkFBL0QsSUFBcUYxRSxDQUFDLENBQUMyRSxpQkFBdkYsSUFBNEczRSxDQUFDLENBQUM0RSxnQkFBNUg7QUFDQSxLQUFDTCxPQUFELEdBQVl2RSxDQUFDLENBQUN1RSxPQUFGLEdBQVl2RSxDQUFDLENBQUN3RSxlQUFGLEdBQW9CLFNBQVNELE9BQVQsQ0FBaUJNLFFBQWpCLEVBQTJCO0FBQ3JFLFVBQUlOLE9BQU8sR0FBR3RILFFBQVEsQ0FBQ2lCLGdCQUFULENBQTBCMkcsUUFBMUIsQ0FBZDtBQUNBLFVBQUlDLEVBQUUsR0FBRyxJQUFUO0FBQ0EsYUFBT0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxJQUFoQixDQUFxQkMsSUFBckIsQ0FBMEJYLE9BQTFCLEVBQW1DLFVBQVV2RSxDQUFWLEVBQWE7QUFDckQsZUFBT0EsQ0FBQyxLQUFLOEUsRUFBYjtBQUNELE9BRk0sQ0FBUDtBQUdELEtBTkQsR0FNTTlFLENBQUMsQ0FBQ3VFLE9BQUYsR0FBWXZFLENBQUMsQ0FBQ3dFLGVBQUYsR0FBb0JELE9BTnRDO0FBT0QsR0FURCxFQVNHWSxPQUFPLENBQUNILFNBVFg7O0FBY0MsYUFBVUksT0FBVixFQUFtQjtBQUNsQkEsV0FBTyxDQUFDYixPQUFSLEdBQWtCYSxPQUFPLENBQUNiLE9BQVIsSUFBbUJhLE9BQU8sQ0FBQ1Ysa0JBQTNCLElBQWlEVSxPQUFPLENBQUNULGlCQUF6RCxJQUE4RVMsT0FBTyxDQUFDUixnQkFBdEYsSUFBMEdRLE9BQU8sQ0FBQ1gscUJBQXBJOztBQUNBVyxXQUFPLENBQUNoRSxPQUFSLEdBQWtCZ0UsT0FBTyxDQUFDaEUsT0FBUixJQUFtQixTQUFTQSxPQUFULENBQWlCeUQsUUFBakIsRUFBMkI7QUFDOUQsVUFBSSxDQUFDLElBQUwsRUFBVyxPQUFPLElBQVA7QUFDWCxVQUFJLEtBQUtOLE9BQUwsQ0FBYU0sUUFBYixDQUFKLEVBQTRCLE9BQU8sSUFBUDs7QUFDNUIsVUFBSSxDQUFDLEtBQUtRLGFBQVYsRUFBeUI7QUFBRSxlQUFPLElBQVA7QUFBYSxPQUF4QyxNQUNLLE9BQU8sS0FBS0EsYUFBTCxDQUFtQmpFLE9BQW5CLENBQTJCeUQsUUFBM0IsQ0FBUDtBQUNOLEtBTEQ7QUFNRCxHQVJBLEVBUUNNLE9BQU8sQ0FBQ0gsU0FSVCxDQUFEO0FBU0gsQzs7Ozs7Ozs7Ozs7QUNoQ0QsQ0FBQyxVQUFVOUksQ0FBVixFQUFhQyxNQUFiLEVBQXFCO0FBQ2xCQSxRQUFNLENBQUNDLFNBQVAsQ0FBaUJrSixpQkFBakIsR0FBcUM7QUFDakNoSixVQUFNLEVBQUUsZ0JBQVVDLE9BQVYsRUFBbUJDLFFBQW5CLEVBQTZCO0FBRWpDTixPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCVSxJQUFqQixDQUFzQixZQUF0QixFQUFvQzZDLElBQXBDLENBQXlDLFlBQVc7QUFDaEQsWUFBTW9ELEtBQUssR0FBRzNHLENBQUMsQ0FBQyxJQUFELENBQWY7QUFBQSxZQUNJNEcsWUFBWSxHQUFHRCxLQUFLLENBQUN6RixJQUFOLENBQVcsUUFBWCxDQURuQjtBQUFBLFlBRUkyRixrQkFBa0IsR0FBR0QsWUFBWSxDQUFDdkQsTUFGdEM7QUFBQSxZQUdJZ0csY0FBYyxHQUFHekMsWUFBWSxDQUFDMEMsTUFBYixDQUFvQixXQUFwQixDQUhyQjtBQUFBLFlBSUl4QyxRQUFRLEdBQUcsR0FKZjs7QUFNQUgsYUFBSyxDQUFDNEMsSUFBTjs7QUFDQTVDLGFBQUssQ0FBQy9DLElBQU4sQ0FBVyxvQ0FBWDs7QUFDQTVELFNBQUMsQ0FBQyxPQUFELEVBQVU7QUFDUCtHLGVBQUssRUFBRSxvQkFEQTtBQUVQdEQsY0FBSSxFQUFFa0QsS0FBSyxDQUFDSyxRQUFOLENBQWUsaUJBQWYsRUFBa0N2RCxJQUFsQztBQUZDLFNBQVYsQ0FBRCxDQUdHd0QsV0FISCxDQUdlTixLQUhmOztBQUtBLFlBQU02QyxpQkFBaUIsR0FBRzdDLEtBQUssQ0FBQ04sSUFBTixDQUFXLHFCQUFYLENBQTFCOztBQUNBckcsU0FBQyxDQUFDLE9BQUQsRUFBVTtBQUNQK0csZUFBSyxFQUFFO0FBREEsU0FBVixDQUFELENBRUdFLFdBRkgsQ0FFZXVDLGlCQUZmO0FBSUEsWUFBTUMsaUJBQWlCLEdBQUdELGlCQUFpQixDQUFDbkQsSUFBbEIsQ0FBdUIsMkJBQXZCLENBQTFCOztBQUNBLGFBQUssSUFBSWpFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5RSxrQkFBcEIsRUFBd0N6RSxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDcEMsV0FBQyxDQUFDLE9BQUQsRUFBVTtBQUNQK0csaUJBQUssRUFBRSwwQkFEQTtBQUVQNUYsZ0JBQUksRUFBRW5CLENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDZHlELGtCQUFJLEVBQUVtRCxZQUFZLENBQUNRLEVBQWIsQ0FBZ0JoRixDQUFoQixFQUFtQnFCLElBQW5CO0FBRFEsYUFBWDtBQUZBLFdBQVYsQ0FBRCxDQU1DUSxJQU5ELENBTU0sWUFOTixFQU1vQjJDLFlBQVksQ0FBQ1EsRUFBYixDQUFnQmhGLENBQWhCLEVBQW1CeUMsR0FBbkIsRUFOcEIsRUFPQ1QsUUFQRCxDQU9VcUYsaUJBUFY7QUFRSDs7QUFFRCxZQUFNQyxpQkFBaUIsR0FBR0QsaUJBQWlCLENBQUN2SSxJQUFsQixDQUF1QiwyQkFBdkIsQ0FBMUI7QUFFQXNJLHlCQUFpQixDQUFDOUksSUFBbEIsR0FBeUJDLEVBQXpCLENBQTRCLE9BQTVCLEVBQXFDLFlBQVc7QUFDNUMsY0FBSyxDQUFDWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRSxRQUFSLENBQWlCLElBQWpCLENBQU4sRUFBK0I7QUFDM0JoRSxhQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLFFBQVIsQ0FBaUIsSUFBakI7QUFDQTRJLDZCQUFpQixDQUFDOUUsU0FBbEIsQ0FBNEJtQyxRQUE1QjtBQUVBNEMsNkJBQWlCLENBQUMvSSxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFXO0FBQ3JDLGtCQUFJNkcsVUFBVSxHQUFHeEgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUgsSUFBUixDQUFhLE9BQWIsQ0FBakI7QUFFQXpILGVBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWTZFLEdBQVosQ0FBZ0IyQyxVQUFoQixFQUE0QnZELElBQTVCLENBQWlDLFVBQWpDLEVBQTZDLFVBQTdDO0FBQ0F1RiwrQkFBaUIsQ0FBQy9GLElBQWxCLENBQXdCekQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsSUFBUixDQUFhLE1BQWIsRUFBcUJ1QyxJQUFyQixFQUF4QjtBQUVBZ0csK0JBQWlCLENBQUNoRixPQUFsQixDQUEwQnFDLFFBQTFCO0FBQ0EwQywrQkFBaUIsQ0FBQzVJLFdBQWxCLENBQThCLElBQTlCO0FBQ0gsYUFSRDtBQVVILFdBZEQsTUFjTztBQUNINEksNkJBQWlCLENBQUM1SSxXQUFsQixDQUE4QixJQUE5QjtBQUNBNkksNkJBQWlCLENBQUNoRixPQUFsQixDQUEwQnFDLFFBQTFCO0FBQ0g7QUFDSixTQW5CRDtBQXFCQTlHLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVcsRUFBVixDQUFjLE9BQWQsRUFBdUIsVUFBU21ELENBQVQsRUFBWTtBQUMvQixjQUFJOUQsQ0FBQyxDQUFDOEQsQ0FBQyxDQUFDWSxNQUFILENBQUQsQ0FBWVEsT0FBWixDQUFvQnNFLGlCQUFwQixFQUF1Q25HLE1BQTNDLEVBQ0k7QUFFQW1HLDJCQUFpQixDQUFDNUksV0FBbEIsQ0FBOEIsSUFBOUI7QUFDQTZJLDJCQUFpQixDQUFDaEYsT0FBbEIsQ0FBMEJxQyxRQUExQjtBQUNQLFNBTkQ7QUFPSCxPQTdERDtBQThESDtBQWpFZ0MsR0FBckM7QUFtRUgsQ0FwRUQsRUFvRUdsRixNQXBFSCxFQW9FVzNCLE1BcEVYLEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoibWFpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL21haW4nO1xuIiwiKGZ1bmN0aW9uICgkLCBEcnVwYWwpIHtcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmNhcmRBdHRyYWN0aW9ucyA9IHtcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkSXRlbUF0dHJhY3Rpb25zID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6ICcnLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy52aWV3LWF0dHJhY3Rpb25zIC52aWV3cy1jb2wnKS5vbmNlKCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhdGgtLWF0dHJhY3Rpb25zIC52aWV3cy1yb3cgLnZpZXdzLWNvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIC8qIGluZm8gbWFwICovXG5cbiAgICAgICAgICAgICAgICBpZiggJCgnLnBhdGgtYXR0cmFjdGlvbnMgI21hcCcpICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFwSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRoLS1hdHRyYWN0aW9ucyAudmlldy1kaXNwbGF5LWlkLWF0dHJhY3Rpb25zX3BhZ2UgLnZpZXctaGVhZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlSW5mbyA9ICQodGhpcykuZmluZCgnLnZpZXdzLWZpZWxkLWZpZWxkLWF0dHJhY3Rpb24tbmFtZSAuZmllbGQtY29udGVudCcpLmh0bWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc0xhYmVsSW5mbyA9ICQodGhpcykuZmluZCgnLnZpZXdzLWZpZWxkLWZpZWxkLWFkZHJlc3MgLnZpZXdzLWxhYmVsJykuaHRtbCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc0luZm8gPSAkKHRoaXMpLmZpbmQoJy52aWV3cy1maWVsZC1maWVsZC1hZGRyZXNzIC5maWVsZC1jb250ZW50JykuaHRtbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudHJ5SW5mbyA9ICQodGhpcykuZmluZCgnLnZpZXdzLWZpZWxkLWZpZWxkLWNvdW50cnkgLmZpZWxkLWNvbnRlbnQnKS5odG1sKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uTGFiZWxJbmZvID0gJCh0aGlzKS5maW5kKCcudmlld3MtZmllbGQtZmllbGQtZGVzdGluYXRpb24tMSAudmlld3MtbGFiZWwnKS5odG1sKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbkluZm8gPSAkKHRoaXMpLmZpbmQoJy52aWV3cy1maWVsZC1maWVsZC1kZXN0aW5hdGlvbi0xIC5maWVsZC1jb250ZW50JykuaHRtbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5rSW5mbyA9ICQodGhpcykuZmluZCgnLnZpZXdzLWZpZWxkLW5vdGhpbmctMSAuZmllbGQtY29udGVudCcpLmh0bWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiggJCgnLm1hcC1pbmZvLXdyYXBwZXInKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tYXAtaW5mby13cmFwcGVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtYXBJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaW5mby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZS1pbmZvXCI+JHt0aXRsZUluZm99PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaW5mby1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pbmZvLWxhYmVsXCI+JHthZGRyZXNzTGFiZWxJbmZvfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWluZm8tdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWluZm8tdGV4dFwiPiR7YWRkcmVzc0luZm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWluZm8tY291bnRyeVwiPiR7Y291bnRyeUluZm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaW5mby1sYWJlbFwiPiR7ZGVzdGluYXRpb25MYWJlbEluZm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaW5mby10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaW5mby10ZXh0XCI+JHtkZXN0aW5hdGlvbkluZm99PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn0pKGpRdWVyeSwgRHJ1cGFsKTsiLCIoZnVuY3Rpb24gKCQsIERydXBhbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IG1vYmlsZUJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRoLWNhcnQgZm9ybScpO1xuXG4gICAgICAgIGlmIChtb2JpbGVCYXNrZXQpIHtcbiAgICAgICAgICAgIG1vYmlsZUJhc2tldC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtYmFza2V0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1iYXNrZXRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWl0ZW0gaGVhZGVyLWl0ZW1fX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pdGVtIGhlYWRlci1pdGVtX19wcmljZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWl0ZW0gaGVhZGVyLWl0ZW1fX3F1YW50aXR5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsSXRlbXNDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhdGgtY2FydCAudmlld3MtZm9ybSAudmlld3Mtdmlldy10YWJsZSB0Ym9keSB0cicpO1xuICAgICAgICAgICAgY29uc3QgbW9iaWxlQ2FydENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtYmFza2V0Jyk7XG5cbiAgICAgICAgICAgIGFsbEl0ZW1zQ2FydC5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBtb2JpbGVDYXJ0Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtYmFza2V0X19pdGVtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtYmFza2V0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaXRlbSBjb250ZW50LWltZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWl0ZW0gY29udGVudC1wcmljZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWl0ZW0gY29udGVudC1xdWFudGl0eVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtYmFza2V0X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tZGVzY1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWRlbGV0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtYmFza2V0X19mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXRvdGFsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1wcmljZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2JpbGVCYXNrZXRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vYmlsZS1iYXNrZXQgLm1vYmlsZS1iYXNrZXRfX2l0ZW0nKTtcblxuICAgICAgICAgICAgICAgIG1vYmlsZUJhc2tldEl0ZW0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1wcmljZScpLmlubmVySFRNTCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXdyYXBwZXInKS5pbm5lckhUTUw7IC8vcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1xdWFudGl0eScpLmlubmVySFRNTCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdHlwZS1udW1iZXInKS5pbm5lckhUTUw7Ly8gaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlc2MnKS5pbm5lckhUTUwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXdyYXBwZXInKS5pbm5lckhUTUw7IC8vaW5mb1xuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmZvb3Rlci10b3RhbCcpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3cy12aWV3LXRhYmxlIHRoZWFkIC52aWV3cy1maWVsZC10b3RhbC1wcmljZV9fbnVtYmVyJykuaW5uZXJIVE1MOyAvL3RvdGFsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmZvb3Rlci1wcmljZScpLmlubmVySFRNTCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdzLWZpZWxkLXRvdGFsLXByaWNlX19udW1iZXInKS5pbm5lckhUTUw7IC8vdG90YWwgcHJpY2VcblxuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWltZycpLmFwcGVuZENoaWxkKGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXdyYXBwZXIgaW1nJykuY2xvbmVOb2RlKCkpOyAvL2ltZ1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRlbGV0ZScpLmFwcGVuZENoaWxkKGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdzLWZpZWxkLXJlbW92ZS1idXR0b24gaW5wdXQnKS5jbG9uZU5vZGUoKSk7IC8vY2xlYXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyByZXBsYWNlIGNvbnRlbnRcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItaXRlbV9faXRlbScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRoLWNhcnQgZm9ybSB0aGVhZCAudmlld3MtZmllbGQtbm90aGluZycpLmlubmVySFRNTDsgLy9JdGVtc1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1pdGVtX19wcmljZScpLmlubmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRoLWNhcnQgZm9ybSB0aGVhZCAudmlld3MtZmllbGQtbm90aGluZy0xJykuaW5uZXJIVE1MOyAvL1ByaWNlXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWl0ZW1fX3F1YW50aXR5JykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGgtY2FydCBmb3JtIHRoZWFkIC52aWV3cy1maWVsZC1lZGl0LXF1YW50aXR5JykuaW5uZXJIVE1MOyAvL1F1YW50aXR5XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXNrZXRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2NrLWNvbW1lcmNlLWNhcnQgLmNhcnQtLWNhcnQtYmxvY2sgLmNhcnQtYmxvY2stLXN1bW1hcnkgLmNhcnQtYmxvY2stLXN1bW1hcnlfX2NvdW50Jyk7XG5cbiAgICAgICAgYmFza2V0SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ICE9PSBcIjAgaXRlbXNcIikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZnVsbC1jYXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59KShqUXVlcnksIERydXBhbCk7XG4iLCJpbXBvcnQgeyBiZWhhdmlvcnMgfSBmcm9tICdEcnVwYWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGJlaGF2aW9ycy5jb29raWVNYXJnaW4gPSB7XG4gICAgYXR0YWNoKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb2tpZUJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldS1jb29raWUtY29tcGxpYW5jZS1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGNvb2tpZUJhbm5lckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldS1jb29raWUtY29tcGxpYW5jZS1jb250ZW50IC5ldS1jb29raWUtY29tcGxpYW5jZS1idXR0b25zIC5hZ3JlZS1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbiAgICAgICAgaWYoY29va2llQmFubmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjb29raWUtbWFyZ2luJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb29raWVCYW5uZXJCdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdjb29raWUtbWFyZ2luJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgfTtcbn07XG4iLCIoZnVuY3Rpb24oJCwgRHJ1cGFsKSB7XG4gICBEcnVwYWwuYmVoYXZpb3JzLmZpbHRlckVhc3lCb29raW5nID0ge1xuICAgICAgYXR0YWNoOiBmdW5jdGlvbihjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgICAgLyogRmlsdGVyIGF0dHJhY3Rpb25zLCBuZXdzICovXG4gICAgICAgICAkKCcudmlldy1maWx0ZXJzLCAuYmxvY2stdmlld3MtZXhwb3NlZC1maWx0ZXItYmxvY2thdHRyYWN0aW9ucy1hdHRyYWN0aW9ucy1wYWdlJylcbiAgICAgICAgIC5vbmNlKCdtb2JpbGUtZmlsdGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy52aWV3LWZpbHRlcnMsIC5ibG9jay12aWV3cy1leHBvc2VkLWZpbHRlci1ibG9ja2F0dHJhY3Rpb25zLWF0dHJhY3Rpb25zLXBhZ2UnKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2JpbGUtZmlsdGVyLWNvbnRhaW5lclwiPtC80L7QsdC40LvRjNC90YvQuSDQutC+0L3RgtC10LnQvdC10YA8L2Rpdj4nLFxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnLmZpZWxkc2V0LXdyYXBwZXIgLmZvcm0tcmFkaW9zIC5mb3JtLXJhZGlvcyAuZm9ybS1pdGVtOmZpcnN0IGxhYmVsJykuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy52aWV3LWZpbHRlcnMgLm1vYmlsZS1maWx0ZXItY29udGFpbmVyLCAuYmxvY2stdmlld3MtZXhwb3NlZC1maWx0ZXItYmxvY2thdHRyYWN0aW9ucy1hdHRyYWN0aW9ucy1wYWdlIC5tb2JpbGUtZmlsdGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAuaHRtbChcbiAgICAgICAgICAgICAgICQoJy5maWVsZHNldC13cmFwcGVyIC5mb3JtLXJhZGlvcyAuZm9ybS1yYWRpb3MgLmZvcm0taXRlbSAuZm9ybS1yYWRpbzpjaGVja2VkICsgbGFiZWwnKVxuICAgICAgICAgICAgICAgLnRleHQoKVxuICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAnLnZpZXctZmlsdGVycyAubW9iaWxlLWZpbHRlci1jb250YWluZXIsIC5ibG9jay12aWV3cy1leHBvc2VkLWZpbHRlci1ibG9ja2F0dHJhY3Rpb25zLWF0dHJhY3Rpb25zLXBhZ2UgLm1vYmlsZS1maWx0ZXItY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgIC5vbmNlKClcbiAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgICAgICAnLnZpZXctZmlsdGVycyAubW9iaWxlLWZpbHRlci1jb250YWluZXIsIC5ibG9jay12aWV3cy1leHBvc2VkLWZpbHRlci1ibG9ja2F0dHJhY3Rpb25zLWF0dHJhY3Rpb25zLXBhZ2UgLm1vYmlsZS1maWx0ZXItY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5maWVsZHNldC13cmFwcGVyIC5mb3JtLXJhZGlvcyAuZm9ybS1yYWRpb3MnKS50b2dnbGVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIC8qIEhlYWRlciBmaWx0ZXIgKi9cbiAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQoJyNlZGl0LWd1ZXN0cy13cmFwcGVyJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgJCgnLmZvcm0taXRlbS1hZHVsdHMsIC5mb3JtLWl0ZW0tY2hpbGRyZW4nKS5vbmNlKCkud3JhcEFsbChcIjxkaXYgY2xhc3M9J2d1ZXN0X2l0ZW1zX3dyYXAnPjwvZGl2PlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkKCcjZWRpdC1jb250YWluZXIgLmZvcm0tc3VibWl0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgJCgnI2VkaXQtY29udGFpbmVyIC5mb3JtLXN1Ym1pdCcpLm9uY2UoKS53cmFwKCc8ZGl2IGNsYXNzPVwiaGVhZGVyX3NlYXJjaF93cmFwXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXIsIC5yZXNlcnZhdGlvbl9mb3JtLS13cmFwcGVyID4gLmZvcm0td3JhcHBlcicpLm9uY2UoKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA3NjgpIHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iX2ZpbHRlcl9vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vYl9maWx0ZXJfb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoJCh0aGlzKS5hdHRyKCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICBjYXNlICdlZGl0LWRhdGUtd3JhcHBlcic6XG4gICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZXJhbmdlcGlja2VyIC5kcnAtY2FsZW5kYXIubGVmdCcpLm9uY2UoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkYXRlcmFuZ2VwaWNrZXItbmF2LXdyYXBwZXJcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgaWYoJCgnLmRhdGVyYW5nZXBpY2tlci1uYXYtd3JhcHBlciAucHJldi5hdmFpbGFibGUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXIgLmRycC1jYWxlbmRhciAuY2FsZW5kYXItdGFibGUgLnByZXYnKS5vbmNlKCkuY2xvbmUoKS5hcHBlbmRUbygnLmRhdGVyYW5nZXBpY2tlci1uYXYtd3JhcHBlcicpO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBpZigkKCcuZGF0ZXJhbmdlcGlja2VyLW5hdi13cmFwcGVyIC5uZXh0LmF2YWlsYWJsZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGVyYW5nZXBpY2tlciAuZHJwLWNhbGVuZGFyIC5jYWxlbmRhci10YWJsZSAubmV4dCcpLm9uY2UoKS5jbG9uZSgpLmFwcGVuZFRvKCcuZGF0ZXJhbmdlcGlja2VyLW5hdi13cmFwcGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBjYXNlICdlZGl0LWRhdGVzLXdyYXBwZXInOlxuICAgICAgICAgICAgICAgICAgICAgJCgnLmRhdGVyYW5nZXBpY2tlciAuZHJwLWNhbGVuZGFyLmxlZnQnKS5vbmNlKCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGF0ZXJhbmdlcGlja2VyLW5hdi13cmFwcGVyXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIGlmKCQoJy5kYXRlcmFuZ2VwaWNrZXItbmF2LXdyYXBwZXIgLnByZXYuYXZhaWxhYmxlJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZXJhbmdlcGlja2VyIC5kcnAtY2FsZW5kYXIgLmNhbGVuZGFyLXRhYmxlIC5wcmV2Jykub25jZSgpLmNsb25lKCkuYXBwZW5kVG8oJy5kYXRlcmFuZ2VwaWNrZXItbmF2LXdyYXBwZXInKTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgaWYoJCgnLmRhdGVyYW5nZXBpY2tlci1uYXYtd3JhcHBlciAubmV4dC5hdmFpbGFibGUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXIgLmRycC1jYWxlbmRhciAuY2FsZW5kYXItdGFibGUgLm5leHQnKS5vbmNlKCkuY2xvbmUoKS5hcHBlbmRUbygnLmRhdGVyYW5nZXBpY2tlci1uYXYtd3JhcHBlcicpO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZWRpdC1ndWVzdHMtd3JhcHBlcic6XG4gICAgICAgICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duJykub25jZSgpLmFwcGVuZCgnPGJ1dHRvbiBpZD1cImZpbHRlcl9jaG9vc2VfYnRuXCI+Q2hvb3NlPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZWRpdC1yb29tLXdyYXBwZXInOlxuICAgICAgICAgICAgICAgICAgICAgJCgnLm5ldy1zZWxlY3RfX2xpc3QnKS5vbmNlKCkuYXBwZW5kKCc8YnV0dG9uIGlkPVwiZmlsdGVyX2Nob29zZV9idG5cIj5DaG9vc2U8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5uZXctc2VsZWN0X19saXN0IHNwYW4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm5ldy1zZWxlY3RfX2xpc3Qgc3BhbicpLnJlbW92ZUNsYXNzKCdhY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAkKCcjZmlsdGVyX2Nob29zZV9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICBlLnByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jb250YWluZXIgPiAuZm9ybS13cmFwcGVyJylcbiAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZnJlZScpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgc3dpdGNoICgkKHRoaXMpLmF0dHIoJ2lkJykpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgKCdlZGl0LWRhdGUtd3JhcHBlcicpOlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcblxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ZyZWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnI2VkaXQtZGF0ZS1pbnRlcnZhbCcpLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vdCgkKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmcmVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZyZWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtZGF0ZS1pbnRlcnZhbCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jb250YWluZXInKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgJCgnLmd1ZXN0cy1kcm9wZG93bicpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgICAgICAgY2FzZSAoJ2VkaXQtZGF0ZXMtd3JhcHBlcicpOiAvLyDQvdC1INGA0LDQsdC+0YLQsNC10YIg0L3QsCDRgdGC0YAu0L3QvtC80LXRgNCwXG4gICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoYXMgYWN0aXZlLCBub3cgcmVtb3ZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LXJlc2VydmF0aW9uLWZvcm0gPiAuZm9ybS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdmcmVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1kYXRldGltZS1pbnRlcnZhbCcpLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1yZXNlcnZhdGlvbi1mb3JtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoJyNlZGl0LXJlc2VydmF0aW9uLWZvcm0gPiAuZm9ybS13cmFwcGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIC5ub3QoJCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIC5hZGRDbGFzcygnZnJlZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jb250YWluZXIgPiAuZm9ybS13cmFwcGVyLCAjZWRpdC1yZXNlcnZhdGlvbi1mb3JtID4gLmZvcm0td3JhcHBlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5yZW1vdmVDbGFzcygnZnJlZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gYWN0aXZlLCBub3cgYWRkIHRoaXMgY2xhc3MuLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1kYXRldGltZS1pbnRlcnZhbCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuZGF0ZXJhbmdlcGlja2VyJykuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtZ3Vlc3RzLXdyYXBwZXInKS5hZGRDbGFzcygnZnJlZScpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LXJlc2VydmF0aW9uLWZvcm0nKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmd1ZXN0cy1kcm9wZG93bicpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBjYXNlICdlZGl0LWd1ZXN0cy13cmFwcGVyJzpcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIGlmKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygnYnRuLW1pbnVzJykgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKCdidG4tcGx1cycpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5ndWVzdHMtZHJvcGRvd24nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jb250YWluZXIgPiAuZm9ybS13cmFwcGVyLCAjZWRpdC1yZXNlcnZhdGlvbi1mb3JtID4gLmZvcm0td3JhcHBlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5yZW1vdmVDbGFzcygnZnJlZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtY29udGFpbmVyLCAjZWRpdC1yZXNlcnZhdGlvbi1mb3JtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXIsICNlZGl0LXJlc2VydmF0aW9uLWZvcm0gPiAuZm9ybS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdmcmVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWRhdGUtd3JhcHBlciwgI2VkaXQtZGF0ZXMtd3JhcHBlcicpLmFkZENsYXNzKCdmcmVlJyk7ICBcbiAgICAgICAgICAgICAgICAgICAgICQoJy5ndWVzdHMtZHJvcGRvd24nKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciwgI2VkaXQtcmVzZXJ2YXRpb24tZm9ybScpLmFkZENsYXNzKCdzaG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duIGlucHV0JykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoZWwpLnZhbCgpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLnBhcmVudCgpLmZpbmQoJy5idG4tbWludXMnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkudmFsKCkgPT0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkucGFyZW50KCkuZmluZCgnLmJ0bi1wbHVzJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2VkaXQtcm9vbS13cmFwcGVyJzpcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jb250YWluZXIgPiAuZm9ybS13cmFwcGVyLCAjZWRpdC1yZXNlcnZhdGlvbi1mb3JtID4gLmZvcm0td3JhcHBlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5yZW1vdmVDbGFzcygnZnJlZScpLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciwgI2VkaXQtcmVzZXJ2YXRpb24tZm9ybScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7IFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXIsICNlZGl0LXJlc2VydmF0aW9uLWZvcm0gPiAuZm9ybS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdmcmVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duJykuc2xpZGVVcCgpOyBcblxuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vdCgkKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmcmVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciwgI2VkaXQtcmVzZXJ2YXRpb24tZm9ybScpLmFkZENsYXNzKCdzaG93Jyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLCAnZGVmYXVsdCBjYXNlJyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSk7XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcjZWRpdC1jb250YWluZXInKS5sZW5ndGggPT0gMCAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcucmVzZXJ2YXRpb25fZm9ybS0td3JhcHBlcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICQoJyNlZGl0LWNvbnRhaW5lciA+IC5mb3JtLXdyYXBwZXIsICNlZGl0LXJlc2VydmF0aW9uLWZvcm0gPiAuZm9ybS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdmcmVlJyk7XG4gICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgLy8gJCgnLnJlc2VydmF0aW9uX2Zvcm0tLXdyYXBwZXIgPiAuZm9ybS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdmcmVlJyk7XG4gICAgICAgICAgICAgICAkKCcjZWRpdC1jb250YWluZXIsICNlZGl0LXJlc2VydmF0aW9uLWZvcm0nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgJCgnI2VkaXQtcm9vbS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ25vLWJlZm9yZScpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdtb2JfZmlsdGVyX29wZW5lZCcpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICBcblxuICAgICAgICAgLy8gb25seSBvbiBoZWFkZXJcbiAgICAgICAgICQoXCIjZWRpdC1ndWVzdHMtd3JhcHBlclwiKS5vbih7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAkKCcjZWRpdC1yb29tLXdyYXBwZXInKS5hZGRDbGFzcygnbm8tYmVmb3JlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgJCgnI2VkaXQtcm9vbS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ25vLWJlZm9yZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG5cbiAgICAgICAgIC8vIG9ubHkgb24gaGVhZGVyICAgICAgICAgXG4gICAgICAgICAkKCcjZWRpdC1jb250YWluZXIgPiAuZm9ybS13cmFwcGVyJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7IFxuICAgICAgICAgICAgaWYoICQoJyNlZGl0LXJvb20td3JhcHBlcicpLmhhc0NsYXNzKCdhY3RpdmUnKSApIHtcbiAgICAgICAgICAgICAgICQoXCIjZWRpdC1ndWVzdHMtd3JhcHBlclwiKS5hZGRDbGFzcygnaGFzLWJlZm9yZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICQoXCIjZWRpdC1ndWVzdHMtd3JhcHBlclwiKS5yZW1vdmVDbGFzcygnaGFzLWJlZm9yZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICBcbiAgICAgIH0sXG4gICB9O1xufSkoalF1ZXJ5LCBEcnVwYWwpO1xuIiwiKGZ1bmN0aW9uKCQsIERydXBhbCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmRhdGVSYW5nZSA9IHtcbiAgICBhdHRhY2g6IGZ1bmN0aW9uKGNvbnRleHQsIHNldHRpbmdzKSB7XG4gICAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZV9pbnRlcnZhbFwiXScpLmRhdGVyYW5nZXBpY2tlcih7XG4gICAgICAgICAgYXV0b0FwcGx5OiB0cnVlLFxuICAgICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgYXBwbHlMYWJlbDogJ0Nob29zZScsXG4gICAgICAgICAgICBmb3JtYXQ6ICdkZGQsIEQgTU1NJyxcbiAgICAgICAgICAgIHNlcGFyYXRvcjogJyAtICcsXG4gICAgICAgICAgICBmaXJzdERheTogMSxcbiAgICAgICAgICAgIFwid2Vla0xhYmVsXCI6IFwiV1wiLFxuICAgICAgICAgICAgXCJkYXlzT2ZXZWVrXCI6IFtcbiAgICAgICAgICAgICAgXCJNb25cIixcbiAgICAgICAgICAgICAgXCJUdWVcIixcbiAgICAgICAgICAgICAgXCJXZWRcIixcbiAgICAgICAgICAgICAgXCJUaHVcIixcbiAgICAgICAgICAgICAgXCJGcmlcIixcbiAgICAgICAgICAgICAgXCJTYXRcIixcbiAgICAgICAgICAgICAgXCJTdW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJtb250aE5hbWVzXCI6IFtcbiAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgICAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgICAgICAgXCJBdWd1c3RcIixcbiAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICAgICAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgICAgICAgICAgXCJEZWNlbWJlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgICQoJyNkYXRlcGlja2VyLWZyb250LWZyb20nKS52YWwoc3RhcnQuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgJCgnI2RhdGVwaWNrZXItZnJvbnQtdG8nKS52YWwoZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZV9pbnRlcnZhbFwiXScpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXInKS5hZGRDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgICAgLy8gJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuZGF0ZXJhbmdlcGlja2VyJyk7IC0g0L3QtSDRgNCw0LHQvtGC0LDQtdGCXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2lucHV0W25hbWU9XCJkYXRlX2ludGVydmFsXCJdJykub24oJ2hpZGUuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLmRhdGVyYW5nZXBpY2tlcicpLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnaW5wdXRbbmFtZT1cImRhdGVfaW50ZXJ2YWxcIl0nKS5vbignc2hvd0NhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXIgLmVuZC1kYXRlJykubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgISQoJy5kYXRlcmFuZ2VwaWNrZXIgLmVuZC1kYXRlJykuaGFzQ2xhc3MoJ3N0YXJ0LWRhdGUnKVxuICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAkKCcuZGF0ZXJhbmdlcGlja2VyIC5lbmQtZGF0ZScpXG4gICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcmV2LWVuZC1kYXRlJyk7XG5cbiAgICAgICAgICAgIGxldCBzdGFydEdyYWRpZW50Q2VsbCA9ICQoJy5kYXRlcmFuZ2VwaWNrZXIgLmRycC1jYWxlbmRhci5yaWdodCAuY2FsZW5kYXItdGFibGUgdGFibGUgdGJvZHkgdGQuaW4tcmFuZ2UnKS5ub3QoJy5vZmYnKS5ub3QoJy5hY3RpdmUnKS5maXJzdCgpO1xuICAgICAgICAgICAgc3RhcnRHcmFkaWVudENlbGwuYWRkQ2xhc3MoJ2ZpcnN0LWRheS1pbi1tb250aCcpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydEdyYWRpZW50Q2VsbFwiLCBzdGFydEdyYWRpZW50Q2VsbCk7XG5cbiAgICAgICAgICAgIGxldCBlbmRHcmFkaWVudENlbGwgPSAkKCcuZGF0ZXJhbmdlcGlja2VyIC5kcnAtY2FsZW5kYXIubGVmdCAuY2FsZW5kYXItdGFibGUgdGFibGUgdGJvZHkgdGQuaW4tcmFuZ2UnKS5ub3QoJy5vZmYnKS5ub3QoJy5hY3RpdmUnKS5sYXN0KCk7XG4gICAgICAgICAgICBlbmRHcmFkaWVudENlbGwuYWRkQ2xhc3MoJ2xhc3QtZGF5LWluLW1vbnRoJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZEdyYWRpZW50Q2VsbFwiLCBlbmRHcmFkaWVudENlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnaW5wdXRbbmFtZT1cImRhdGVfaW50ZXJ2YWxcIl0nKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnI2VkaXQtZGF0ZS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iX2ZpbHRlcl9vcGVuZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xuICBEcnVwYWwuYmVoYXZpb3JzLmRhdGVUaW1lUmFuZ2UgPSB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbihjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnaW5wdXRbbmFtZT1cImRhdGV0aW1lX2ludGVydmFsXCJdJykuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICAgICAgICAgIGF1dG9BcHBseTogdHJ1ZSxcbiAgICAgICAgICAgIHRpbWVQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgICAgYXBwbHlMYWJlbDogJ0Nob29zZScsXG4gICAgICAgICAgICAgIGZvcm1hdDogJ2RkZCwgRCBNTU0sIGhoOm1tIEEnLFxuICAgICAgICAgICAgICBzZXBhcmF0b3I6ICcgLSAnLFxuICAgICAgICAgICAgICBmaXJzdERheTogMSxcbiAgICAgICAgICAgICAgXCJ3ZWVrTGFiZWxcIjogXCJXXCIsXG4gICAgICAgICAgICAgIFwiZGF5c09mV2Vla1wiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25cIixcbiAgICAgICAgICAgICAgICBcIlR1ZVwiLFxuICAgICAgICAgICAgICAgIFwiV2VkXCIsXG4gICAgICAgICAgICAgICAgXCJUaHVcIixcbiAgICAgICAgICAgICAgICBcIkZyaVwiLFxuICAgICAgICAgICAgICAgIFwiU2F0XCIsXG4gICAgICAgICAgICAgICAgXCJTdW5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1xuICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgICAgICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICAgICAgXCJBdWd1c3RcIixcbiAgICAgICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgICAgICAgICAgICBcIkRlY2VtYmVyXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAkKCcjZWRpdC1zdGFydC1kYXRlLWRhdGUnKS52YWwoc3RhcnQuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgJCgnI2VkaXQtZW5kLWRhdGUtZGF0ZScpLnZhbChlbmQuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgJCgnI2VkaXQtc3RhcnQtZGF0ZS10aW1lJykudmFsKHN0YXJ0LmZvcm1hdCgnSEg6MDA6MDAnKSk7XG4gICAgICAgICAgICAkKCcjZWRpdC1lbmQtZGF0ZS10aW1lJykudmFsKGVuZC5mb3JtYXQoJ0hIOjAwOjAwJykpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2lucHV0W25hbWU9XCJkYXRldGltZV9pbnRlcnZhbFwiXScpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXInKS5hZGRDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgICAgLy8gJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuZGF0ZXJhbmdlcGlja2VyJyk7IC0g0L3QtSDRgNCw0LHQvtGC0LDQtdGCXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2lucHV0W25hbWU9XCJkYXRldGltZV9pbnRlcnZhbFwiXScpLm9uKCdoaWRlLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2lucHV0W25hbWU9XCJkYXRldGltZV9pbnRlcnZhbFwiXScpLm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgJCgnLmRhdGVyYW5nZXBpY2tlciAuZW5kLWRhdGUnKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAhJCgnLmRhdGVyYW5nZXBpY2tlciAuZW5kLWRhdGUnKS5oYXNDbGFzcygnc3RhcnQtZGF0ZScpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAkKCcuZGF0ZXJhbmdlcGlja2VyIC5lbmQtZGF0ZScpXG4gICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcmV2LWVuZC1kYXRlJyk7XG5cbiAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXIgLmRycC1jYWxlbmRhciAuaW4tcmFuZ2Uub2ZmOmZpcnN0JylcbiAgICAgICAgICAgICAgLnByZXYoKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2xhc3QtZGF5LWluLW1vbnRoJyk7XG5cbiAgICAgICAgICAgICQoJy5kYXRlcmFuZ2VwaWNrZXIgLmRycC1jYWxlbmRhciAuaW4tcmFuZ2Uub2ZmOmxhc3QnKVxuICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcygnZmlyc3QtZGF5LWluLW1vbnRoJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZXRpbWVfaW50ZXJ2YWxcIl0nKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnI2VkaXQtZGF0ZXMtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAvLyAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYl9maWx0ZXJfb3BlbmVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn0pKGpRdWVyeSwgRHJ1cGFsKTtcbiIsIihmdW5jdGlvbigkLCBEcnVwYWwpIHtcbiAgICBEcnVwYWwuYmVoYXZpb3JzLmhlYWRlckZvcm0gPSB7XG4gICAgICAgIGF0dGFjaDogZnVuY3Rpb24oY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckZvcm0gPSB7fTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnaGVhZGVyICNlYXN5LWJvb2tpbmctZmFjZXRzLWF2YWlsYWJpbGl0eS1mb3JtICNlZGl0LWd1ZXN0cy13cmFwcGVyJylcbiAgICAgICAgICAgIC5vbmNlKCdndWVzdHMtZHJvcGRvd24nKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyICNlYXN5LWJvb2tpbmctZmFjZXRzLWF2YWlsYWJpbGl0eS1mb3JtICNlZGl0LWd1ZXN0cy13cmFwcGVyJykucHJlcGVuZChgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWVzdHMtZHJvcGRvd25fX2ZpZWxkIGd1ZXN0cy1kcm9wZG93bl9fZmllbGRfYWR1bHRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWVzdHMtZHJvcGRvd25fX3RpdGxlXCI+QWR1bHRzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fZGVzY1wiPkFnZXMgMTMgb3IgYWJvdmU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tbWludXNcIj4tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZHJvcGRvd24tYWR1bHRzXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tcGx1c1wiPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX19maWVsZCBndWVzdHMtZHJvcGRvd25fX2ZpZWxkX2NoaWxkcmVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWVzdHMtZHJvcGRvd25fX3RpdGxlXCI+Q2hpbGRyZW48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX19kZXNjXCI+QWdlcyAyLTEyPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLW1pbnVzXCI+LTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImRyb3Bkb3duLWFkdWx0c1wiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXBsdXNcIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCgnLmd1ZXN0cy1kcm9wZG93bl9fZmllbGRfYWR1bHRzIGlucHV0JykudmFsKCQoJyNlZGl0LWFkdWx0cycpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duX19maWVsZF9jaGlsZHJlbiBpbnB1dCcpLnZhbCgkKCcjZWRpdC1jaGlsZHJlbicpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcjZWRpdC1hZHVsdHMnKS5hdHRyKCdtYXgnLCA5KTtcbiAgICAgICAgICAgICAgICAkKCcjZWRpdC1jaGlsZHJlbicpLmF0dHIoJ21heCcsIDkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5yZXNlcnZhdGlvbl9mb3JtLS13cmFwcGVyICNlZGl0LWd1ZXN0cy13cmFwcGVyJylcbiAgICAgICAgICAgIC5vbmNlKCdndWVzdHMtZHJvcGRvd24nKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnJlc2VydmF0aW9uX2Zvcm0tLXdyYXBwZXIgI2VkaXQtZ3Vlc3RzLXdyYXBwZXInKS5wcmVwZW5kKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fZmllbGQgZ3Vlc3RzLWRyb3Bkb3duX19maWVsZF9hZHVsdHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fdGl0bGVcIj5BZHVsdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX19kZXNjXCI+QWdlcyAxMyBvciBhYm92ZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWVzdHMtZHJvcGRvd25fX2NvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1taW51c1wiPi08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJkcm9wZG93bi1hZHVsdHNcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1wbHVzXCI+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWVzdHMtZHJvcGRvd25fX2ZpZWxkIGd1ZXN0cy1kcm9wZG93bl9fZmllbGRfY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1ZXN0cy1kcm9wZG93bl9fdGl0bGVcIj5DaGlsZHJlbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWVzdHMtZHJvcGRvd25fX2Rlc2NcIj5BZ2VzIDItMTI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3Vlc3RzLWRyb3Bkb3duX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tbWludXNcIj4tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZHJvcGRvd24tYWR1bHRzXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tcGx1c1wiPis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duX19maWVsZF9hZHVsdHMgaW5wdXQnKS52YWwoJCgnI2VkaXQtYWR1bHRzJykudmFsKCkpO1xuICAgICAgICAgICAgICAgICQoJy5ndWVzdHMtZHJvcGRvd25fX2ZpZWxkX2NoaWxkcmVuIGlucHV0JykudmFsKCQoJyNlZGl0LWNoaWxkcmVuJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJyNlZGl0LWFkdWx0cycpLmF0dHIoJ21heCcsIDkpO1xuICAgICAgICAgICAgICAgICQoJyNlZGl0LWNoaWxkcmVuJykuYXR0cignbWF4JywgOSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnI2VkaXQtZ3Vlc3RzLXdyYXBwZXIgbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5ndWVzdHMtZHJvcGRvd24gLmJ0bi1taW51cycpXG4gICAgICAgICAgICAub25jZSgpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZ3Vlc3RzLWRyb3Bkb3duX19jb250cm9sJylcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsKCkgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndG8gemVyby4uJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpID09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5idG4tcGx1cycpXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsKDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbCgraW5wdXQudmFsKCkgLSArMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJyNlZGl0LWFkdWx0cycpLnZhbCgkKCcuZ3Vlc3RzLWRyb3Bkb3duX19maWVsZF9hZHVsdHMgaW5wdXQnKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgJCgnI2VkaXQtY2hpbGRyZW4nKS52YWwoJCgnLmd1ZXN0cy1kcm9wZG93bl9fZmllbGRfY2hpbGRyZW4gaW5wdXQnKS52YWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJCgnLmd1ZXN0cy1kcm9wZG93biAuYnRuLXBsdXMnKVxuICAgICAgICAgICAgLm9uY2UoKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmd1ZXN0cy1kcm9wZG93bl9fY29udHJvbCcpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zyb20gemVyby4uJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYnRuLW1pbnVzJylcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsKCkgPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWwoKSA+PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbCg5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWwoK2lucHV0LnZhbCgpICsgKzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcjZWRpdC1hZHVsdHMnKS52YWwoJCgnLmd1ZXN0cy1kcm9wZG93bl9fZmllbGRfYWR1bHRzIGlucHV0JykudmFsKCkpO1xuICAgICAgICAgICAgICAgICQoJyNlZGl0LWNoaWxkcmVuJykudmFsKCQoJy5ndWVzdHMtZHJvcGRvd25fX2ZpZWxkX2NoaWxkcmVuIGlucHV0JykudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJyNlZGl0LWFkdWx0cycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuZ3Vlc3RzLWRyb3Bkb3duX19maWVsZF9hZHVsdHMgaW5wdXQnKS52YWwoJCgnI2VkaXQtYWR1bHRzJykudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJyNlZGl0LWNoaWxkcmVuJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5ndWVzdHMtZHJvcGRvd25fX2ZpZWxkX2NoaWxkcmVuIGlucHV0JykudmFsKCQoJyNlZGl0LWNoaWxkcmVuJykudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn0pKGpRdWVyeSwgRHJ1cGFsKTtcbiIsIihmdW5jdGlvbiAoJCwgRHJ1cGFsKSB7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5zZWxlY3RGb3JtID0ge1xuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICAkKCdoZWFkZXIgc2VsZWN0Jykub25jZSgnaGVhZGVyc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9uID0gX3RoaXMuZmluZCgnb3B0aW9uJyksXG4gICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9uTGVuZ3RoID0gc2VsZWN0T3B0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdE9wdGlvbi5maWx0ZXIoJzpzZWxlY3RlZCcpLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gNDUwO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ25ldy1zZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdGhpcy5jaGlsZHJlbignb3B0aW9uOnNlbGVjdGVkJykudGV4dCgpXG4gICAgICAgICAgICAgICAgfSkuaW5zZXJ0QWZ0ZXIoX3RoaXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEhlYWQgPSBfdGhpcy5uZXh0KCcubmV3LXNlbGVjdCcpO1xuXG4gICAgICAgICAgICAgICAgJCgnPGRpdj4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbmV3LXNlbGVjdF9fbGlzdCdcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnRBZnRlcignI2VkaXQtcm9vbS13cmFwcGVyID4gaW5wdXQuZm9ybS1zdWJtaXQnKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9ICQoJyNlZGl0LXJvb20td3JhcHBlciA+IC5uZXctc2VsZWN0X19saXN0Jyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNlbGVjdE9wdGlvbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICduZXctc2VsZWN0X19pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICQoJzxzcGFuPicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzZWxlY3RPcHRpb24uZXEoaSkudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsIHNlbGVjdE9wdGlvbi5lcShpKS52YWwoKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKHNlbGVjdExpc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkZvcm1TZWEgPSAkKCcuZm9ybS1pdGVtLXJvb20nKVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbSA9IHNlbGVjdExpc3QuZmluZCgnLm5ldy1zZWxlY3RfX2l0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGJ0bkZvcm1TZWEub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RIZWFkLnRvZ2dsZUNsYXNzKCdvbicpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0LnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnI2VkaXQtcm9vbS13cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaG9vc2VJdGVtID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcpLnZhbChjaG9vc2VJdGVtKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RIZWFkLnRleHQoICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdExpc3Quc2xpZGVVcChkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoYnRuRm9ybVNlYSkubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdEhlYWQuaGFzQ2xhc3MoJ29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1yb29tLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0LnNsaWRlVXAoZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nsb3NlIGZyb20gYm9keScpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn0pKGpRdWVyeSwgRHJ1cGFsKTsiLCIoZnVuY3Rpb24gKCQsIERydXBhbCkge1xuICAgIERydXBhbC5iZWhhdmlvcnMubG9nbyA9IHtcbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAkKCcuc2l0ZS1sb2dvIGltZycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciAkaW1nID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcbiAgICAgICAgICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xuICAgICAgICAgICAgJC5nZXQoaW1nVVJMLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgIHZhciAkc3ZnID0gJChkYXRhKS5maW5kKCdzdmcnKTtcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoJ2NsYXNzJywgaW1nQ2xhc3MrJyByZXBsYWNlZC1zdmcnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XG4gICAgICAgICAgICAgIGlmKCEkc3ZnLmF0dHIoJ3ZpZXdCb3gnKSAmJiAkc3ZnLmF0dHIoJ2hlaWdodCcpICYmICRzdmcuYXR0cignd2lkdGgnKSkge1xuICAgICAgICAgICAgICAgICRzdmcuYXR0cigndmlld0JveCcsICcwIDAgJyArICRzdmcuYXR0cignaGVpZ2h0JykgKyAnICcgKyAkc3ZnLmF0dHIoJ3dpZHRoJykpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcbiAgICAgICAgICAgIH0sICd4bWwnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59KShqUXVlcnksIERydXBhbCk7XG4iLCJpbXBvcnQgcG9seWZpbGxzIGZyb20gJy4vcG9seWZpbGxzJztcbmltcG9ydCAnLi9sb2dvL2xvZ28nO1xuaW1wb3J0ICcuL21vYmlsZS1tZW51L21vYmlsZS1tZW51JztcbmltcG9ydCAnLi9iYXNrZXQvYmFza2V0JztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oZWFkZXItZm9ybS9ndWVzdHMtZHJvcGRvd24nO1xuaW1wb3J0ICcuL2hlYWRlci1mb3JtL3NlbGVjdCc7XG5pbXBvcnQgJy4vaGVhZGVyLWZvcm0vZGF0ZXJhbmdlJztcbmltcG9ydCAnLi9yb29tL3NlbGVjdC1jb3VudHJ5JztcbmltcG9ydCAnLi9hdHRyYWN0aW9ucy9hdHRyYWN0aW9ucy1jYXJkLXJvdXQnO1xuaW1wb3J0IGNvb2tpZU1hcmdpbiBmcm9tICcuL2Nvb2tpZS9jb29raWUtbWFyZ2luJztcblxuKCgpID0+IHtcbiAgcG9seWZpbGxzKCk7XG4gIGNvb2tpZU1hcmdpbigpO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoJCwgRHJ1cGFsKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoXCIubW9iaWxlLWhhbWJ1cmdlci13cmFwcGVyXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgJChcIi5tZW51LWNhcnQtd3JhcHBlclwiKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoJ2xvY2snKTtcbiAgICB9KTtcbiAgfSlcbn0pKGpRdWVyeSwgRHJ1cGFsKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHNtb290aHNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwtcG9seWZpbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb2x5ZmlsbHMoKSB7XG4gIHNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xuXG4gICAgLy9cbiAgICAvLyBtYXRjaGVzXG4gICAgLy9cbiAgICAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBtYXRjaGVzID0gZS5tYXRjaGVzIHx8IGUubWF0Y2hlc1NlbGVjdG9yIHx8IGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgZS5vTWF0Y2hlc1NlbGVjdG9yO1xuICAgICAgIW1hdGNoZXMgPyAoZS5tYXRjaGVzID0gZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHZhciB0aCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKG1hdGNoZXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUgPT09IHRoO1xuICAgICAgICB9KTtcbiAgICAgIH0pIDogKGUubWF0Y2hlcyA9IGUubWF0Y2hlc1NlbGVjdG9yID0gbWF0Y2hlcyk7XG4gICAgfSkoRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgLy9cbiAgICAvLyBjbG9zZXN0XG4gICAgLy9cbiAgICAoZnVuY3Rpb24gKEVMRU1FTlQpIHtcbiAgICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICAgIEVMRU1FTlQuY2xvc2VzdCA9IEVMRU1FTlQuY2xvc2VzdCB8fCBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghdGhpcykgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHsgcmV0dXJuIG51bGwgfVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcbiAgICAgIH07XG4gICAgfShFbGVtZW50LnByb3RvdHlwZSkpO1xufVxuIiwiKGZ1bmN0aW9uICgkLCBEcnVwYWwpIHtcbiAgICBEcnVwYWwuYmVoYXZpb3JzLnNlbGVjdENvdW50cnlGb3JtID0ge1xuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICAkKCdtYWluIHNlbGVjdCcpLm9uY2UoJ21haW5zZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IF90aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9uID0gX3RoaXMuZmluZCgnb3B0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbkxlbmd0aCA9IHNlbGVjdE9wdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0T3B0aW9uLmZpbHRlcignOnNlbGVjdGVkJyksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gMzAwO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3QtY291bnRyeVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ25ldy1zZWxlY3QtY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IF90aGlzLmNoaWxkcmVuKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KClcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnRBZnRlcihfdGhpcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RDb3VudHJ5SGVhZCA9IF90aGlzLm5leHQoJy5uZXctc2VsZWN0LWNvdW50cnknKTtcbiAgICAgICAgICAgICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICduZXctc2VsZWN0LWNvdW50cnlfX2xpc3QnXG4gICAgICAgICAgICAgICAgfSkuaW5zZXJ0QWZ0ZXIoc2VsZWN0Q291bnRyeUhlYWQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0Q291bnRyeUxpc3QgPSBzZWxlY3RDb3VudHJ5SGVhZC5uZXh0KCcubmV3LXNlbGVjdC1jb3VudHJ5X19saXN0Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzZWxlY3RPcHRpb25MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnbmV3LXNlbGVjdC1jb3VudHJ5X19pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICQoJzxzcGFuPicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzZWxlY3RPcHRpb24uZXEoaSkudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsIHNlbGVjdE9wdGlvbi5lcShpKS52YWwoKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKHNlbGVjdENvdW50cnlMaXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RDb3VudHJ5SXRlbSA9IHNlbGVjdENvdW50cnlMaXN0LmZpbmQoJy5uZXctc2VsZWN0LWNvdW50cnlfX2l0ZW0nKTtcblxuICAgICAgICAgICAgICAgIHNlbGVjdENvdW50cnlIZWFkLm9uY2UoKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhJCh0aGlzKS5oYXNDbGFzcygnb24nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RDb3VudHJ5TGlzdC5zbGlkZURvd24oZHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RDb3VudHJ5SXRlbS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hvb3NlSXRlbSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcpLnZhbChjaG9vc2VJdGVtKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENvdW50cnlIZWFkLnRleHQoICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoKSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q291bnRyeUxpc3Quc2xpZGVVcChkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q291bnRyeUhlYWQucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q291bnRyeUhlYWQucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RDb3VudHJ5TGlzdC5zbGlkZVVwKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KHNlbGVjdENvdW50cnlIZWFkKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENvdW50cnlIZWFkLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Q291bnRyeUxpc3Quc2xpZGVVcChkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59KShqUXVlcnksIERydXBhbCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBEcnVwYWw7Il0sInNvdXJjZVJvb3QiOiIifQ==