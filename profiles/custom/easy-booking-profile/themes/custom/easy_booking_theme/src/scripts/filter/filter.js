(function($, Drupal) {
   Drupal.behaviors.filterEasyBooking = {
      attach: function(context, settings) {
         /* Filter attractions, news */
         $('.view-filters, .block-views-exposed-filter-blockattractions-attractions-page')
         .once('mobile-filter-container')
         .each(function() {
            $('.view-filters, .block-views-exposed-filter-blockattractions-attractions-page').prepend(
               '<div class="mobile-filter-container">мобильный контейнер</div>',
               );
               
            $('.fieldset-wrapper .form-radios .form-radios .form-item:first label').addClass(
               'active',
               );
               
            $('.view-filters .mobile-filter-container, .block-views-exposed-filter-blockattractions-attractions-page .mobile-filter-container')
            .html(
               $('.fieldset-wrapper .form-radios .form-radios .form-item .form-radio:checked + label')
               .text()
               )
            });
                  
            $(
               '.view-filters .mobile-filter-container, .block-views-exposed-filter-blockattractions-attractions-page .mobile-filter-container',
               )
               .once()
               .on('click', function() {
                  $(
                     '.view-filters .mobile-filter-container, .block-views-exposed-filter-blockattractions-attractions-page .mobile-filter-container',
                     ).toggleClass('show');
                     $('.fieldset-wrapper .form-radios .form-radios').toggleClass('show');
            });
                        
         /* Header filter */
         $(document).ready(function() {
            if ($('#edit-guests-wrapper').length > 0) {
               $('.form-item-adults, .form-item-children').once().wrapAll("<div class='guest_items_wrap'></div>");
            }
            if ($('#edit-container .form-submit').length > 0) {
               $('#edit-container .form-submit').once().wrap('<div class="header_search_wrap"></div>');
            }
            
            $('#edit-container > .form-wrapper, .reservation_form--wrapper > .form-wrapper').once().click(function(e) {
               
               if ($(window).width() <= 768) {
                  
                  if($(this).hasClass('active')) {
                     $('body').removeClass('mob_filter_opened');
                  } else {
                     $('body').addClass('mob_filter_opened');
                  }
                  
                  switch ($(this).attr('id')) {
                     case 'edit-date-wrapper':
                     $('.daterangepicker .drp-calendar.left').once().append('<div class="daterangepicker-nav-wrapper"></div>');
                     
                     if($('.daterangepicker-nav-wrapper .prev.available').length === 0) {
                        $('.daterangepicker .drp-calendar .calendar-table .prev').once().clone().appendTo('.daterangepicker-nav-wrapper');
                     }
                     
                     if($('.daterangepicker-nav-wrapper .next.available').length === 0) {
                        $('.daterangepicker .drp-calendar .calendar-table .next').once().clone().appendTo('.daterangepicker-nav-wrapper');
                     }
                     
                     break;
                     
                     case 'edit-dates-wrapper':
                     $('.daterangepicker .drp-calendar.left').once().append('<div class="daterangepicker-nav-wrapper"></div>');
                     
                     if($('.daterangepicker-nav-wrapper .prev.available').length === 0) {
                        $('.daterangepicker .drp-calendar .calendar-table .prev').once().clone().appendTo('.daterangepicker-nav-wrapper');
                     }
                     
                     if($('.daterangepicker-nav-wrapper .next.available').length === 0) {
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
                  
                  $('#filter_choose_btn').on('click', function(e) {
                     e.prev();
                     $('.daterangepicker').removeClass('opened');
                     $('#edit-container > .form-wrapper')
                     .removeClass('active')
                     .removeClass('free');
                  })
               }
               
               
               
               
               // console.log($(this));               
               
               
               switch ($(this).attr('id')) {
                  case ('edit-date-wrapper'):
                  
                  if ($(this).hasClass('active')) {

                     
                     
                     $('#edit-container > .form-wrapper').removeClass('active').removeClass('free');
                     $(this).find('#edit-date-interval').blur();
                     $('#edit-container').removeClass('show');
                     
                  } else {

                     $('#edit-container > .form-wrapper')
                        .not($(this))
                        .removeClass('active')
                        .addClass('free');

                     $(this).removeClass('free');
                     $(this).addClass('active');                                       
                     $('#edit-date-interval').focus();
                     $('#edit-container').addClass('show');
                     $('.guests-dropdown').slideUp();
                  }
                  
                  break;


                  case ('edit-dates-wrapper'): // не работает на стр.номера
   
                     
                     if ($(this).hasClass('active')) {

                        // console.log('has active, now remove');

                        $('#edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
                        $('#edit-datetime-interval').blur();
                        $('.daterangepicker').removeClass('opened');
                        $('#edit-reservation-form').removeClass('show');
                        
                     } else {
                        // $('#edit-reservation-form > .form-wrapper')
                        //    .not($(this))
                        //    .removeClass('active')
                        //    .addClass('free');

                        $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');

                        // console.log('no active, now add this class..');
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
                     
                     if(!$(e.target).hasClass('btn-minus') && !$(e.target).hasClass('btn-plus')) {

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

                        if($(el).val() == 0) {
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

                     $('#edit-container > .form-wrapper')
                        .not($(this))
                        .addClass('free');

                     $('#edit-container, #edit-reservation-form').addClass('show');                            
                  }
                  
                  break;
                  
                  
                  
                  default:
                     console.log($(this), 'default case');
                  break;
               }
            });
         });
         
         
         $('body').on('click', function(e) {
            if ($(e.target).closest('#edit-container').length == 0 && $(e.target).closest('.reservation_form--wrapper').length == 0) {
               
               $('#edit-container > .form-wrapper, #edit-reservation-form > .form-wrapper').removeClass('active').removeClass('free');
               $('.guests-dropdown').slideUp();
               // $('.reservation_form--wrapper > .form-wrapper').removeClass('active').removeClass('free');
               $('#edit-container, #edit-reservation-form').removeClass('show');
               $('#edit-room-wrapper').removeClass('no-before');
               
               if ($(window).width() <= 768) {
                  $(this).removeClass('mob_filter_opened');
               }
            }
         });
         

         // only on header
         $("#edit-guests-wrapper").on({
            mouseenter: function () {
               $('#edit-room-wrapper').addClass('no-before');
            },
            mouseleave: function () {
               $('#edit-room-wrapper').removeClass('no-before');
            }
         });

         // only on header         
         $('#edit-container > .form-wrapper').mouseenter(function () { 
            if( $('#edit-room-wrapper').hasClass('active') ) {
               $("#edit-guests-wrapper").addClass('has-before');
            } else {
               $("#edit-guests-wrapper").removeClass('has-before');
            }
         });
         
      },
   };
})(jQuery, Drupal);
