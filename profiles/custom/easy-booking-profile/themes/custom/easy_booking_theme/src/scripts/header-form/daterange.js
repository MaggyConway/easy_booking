(function($, Drupal) {
  Drupal.behaviors.dateRange = {
    attach: function(context, settings) {
      $(function() {
        $('input[name="date_interval"]').daterangepicker({
          autoApply: true,
          locale: {
            applyLabel: 'Choose',
            format: 'ddd, D MMM',
            separator: ' - ',
            firstDay: 1,
            "weekLabel": "W",
            "daysOfWeek": [
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun"
          ],
          "monthNames": [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
          ],
          },
        },
          function(start, end) {
            $('#datepicker-front-from').val(start.format('YYYY-MM-DD'));
            $('#datepicker-front-to').val(end.format('YYYY-MM-DD'));
          });

        $('input[name="date_interval"]').on('show.daterangepicker', function() {
          $('.daterangepicker').addClass('opened');
          // $(this).trigger('toggle.daterangepicker'); - не работает
        });

        $('input[name="date_interval"]').on('hide.daterangepicker', function() {
          $('.daterangepicker').removeClass('opened');
        });

        $('input[name="date_interval"]').on('showCalendar.daterangepicker', function() {
          if (
            $('.daterangepicker .end-date').length > 0 &&
            !$('.daterangepicker .end-date').hasClass('start-date')
          ) {

            $('.daterangepicker .end-date')
              .prev()
              .addClass('prev-end-date');

            let startGradientCell = $('.daterangepicker .drp-calendar.right .calendar-table table tbody td.in-range').not('.off').not('.active').first();
            startGradientCell.addClass('first-day-in-month');
            // console.log("startGradientCell", startGradientCell);

            let endGradientCell = $('.daterangepicker .drp-calendar.left .calendar-table table tbody td.in-range').not('.off').not('.active').last();
            endGradientCell.addClass('last-day-in-month');
            // console.log("endGradientCell", endGradientCell);
          }
        });

        $('input[name="date_interval"]').on('apply.daterangepicker', function() {
          $('#edit-date-wrapper').removeClass('active');
          $('body').removeClass('mob_filter_opened');
        });
      });
    },
  };
  Drupal.behaviors.dateTimeRange = {
    attach: function(context, settings) {
      $(function() {
        $('input[name="datetime_interval"]').daterangepicker({
            autoApply: true,
            timePicker: true,
            locale: {
              applyLabel: 'Choose',
              format: 'ddd, D MMM, hh:mm A',
              separator: ' - ',
              firstDay: 1,
              "weekLabel": "W",
              "daysOfWeek": [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
              ],
              "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ],
            },
          },
          function(start, end) {
            $('#edit-start-date-date').val(start.format('YYYY-MM-DD'));
            $('#edit-end-date-date').val(end.format('YYYY-MM-DD'));
            $('#edit-start-date-time').val(start.format('HH:00:00'));
            $('#edit-end-date-time').val(end.format('HH:00:00'));
          });

        $('input[name="datetime_interval"]').on('show.daterangepicker', function() {
          $('.daterangepicker').addClass('opened');
          // $(this).trigger('toggle.daterangepicker'); - не работает
        });

        $('input[name="datetime_interval"]').on('hide.daterangepicker', function() {
          $('.daterangepicker').removeClass('opened');
        });

        $('input[name="datetime_interval"]').on('showCalendar.daterangepicker', function() {
          if (
            $('.daterangepicker .end-date').length > 0 &&
            !$('.daterangepicker .end-date').hasClass('start-date')
          ) {
            $('.daterangepicker .end-date')
              .prev()
              .addClass('prev-end-date');

            $('.daterangepicker .drp-calendar .in-range.off:first')
              .prev()
              .addClass('last-day-in-month');

            $('.daterangepicker .drp-calendar .in-range.off:last')
              .next()
              .addClass('first-day-in-month');
          }
        });

        $('input[name="datetime_interval"]').on('apply.daterangepicker', function() {
          $('#edit-dates-wrapper').removeClass('active');
          // $('body').removeClass('mob_filter_opened');
        });
      });
    },
  };
})(jQuery, Drupal);
