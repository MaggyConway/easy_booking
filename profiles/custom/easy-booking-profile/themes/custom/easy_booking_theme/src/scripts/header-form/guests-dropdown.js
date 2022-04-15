(function($, Drupal) {
    Drupal.behaviors.headerForm = {
        attach: function(context, settings) {
            const headerForm = {};
            
            $('header #easy-booking-facets-availability-form #edit-guests-wrapper')
            .once('guests-dropdown')
            .each(function() {
                $('header #easy-booking-facets-availability-form #edit-guests-wrapper').prepend(`
                <div class="guests-dropdown">
                
                <div class="guests-dropdown__field guests-dropdown__field_adults">
                <div class="guests-dropdown__text">
                <div class="guests-dropdown__title">Adults</div>
                <div class="guests-dropdown__desc">Ages 13 or above</div>
                </div>
                <div class="guests-dropdown__control">
                <button type="button" class="btn-minus">-</button>
                
                <input type="number" name="dropdown-adults">
                
                <button type="button" class="btn-plus">+</button>
                </div>
                </div>
                
                <div class="guests-dropdown__field guests-dropdown__field_children">
                <div class="guests-dropdown__text">
                <div class="guests-dropdown__title">Children</div>
                <div class="guests-dropdown__desc">Ages 2-12</div>
                </div>
                <div class="guests-dropdown__control">
                <button type="button" class="btn-minus">-</button>
                
                <input type="number" name="dropdown-adults">
                
                <button type="button" class="btn-plus">+</button>
                </div>
                </div>
                
                </div>`);
                
                $('.guests-dropdown__field_adults input').val($('#edit-adults').val());
                $('.guests-dropdown__field_children input').val($('#edit-children').val());
                
                $('#edit-adults').attr('max', 9);
                $('#edit-children').attr('max', 9);
            });
            
            $('.reservation_form--wrapper #edit-guests-wrapper')
            .once('guests-dropdown')
            .each(function() {
                $('.reservation_form--wrapper #edit-guests-wrapper').prepend(`
                <div class="guests-dropdown">
                
                <div class="guests-dropdown__field guests-dropdown__field_adults">
                <div class="guests-dropdown__text">
                <div class="guests-dropdown__title">Adults</div>
                <div class="guests-dropdown__desc">Ages 13 or above</div>
                </div>
                <div class="guests-dropdown__control">
                <button type="button" class="btn-minus">-</button>
                
                <input type="number" name="dropdown-adults">
                
                <button type="button" class="btn-plus">+</button>
                </div>
                </div>
                
                <div class="guests-dropdown__field guests-dropdown__field_children">
                <div class="guests-dropdown__text">
                <div class="guests-dropdown__title">Children</div>
                <div class="guests-dropdown__desc">Ages 2-12</div>
                </div>
                <div class="guests-dropdown__control">
                <button type="button" class="btn-minus">-</button>
                
                <input type="number" name="dropdown-adults">
                
                <button type="button" class="btn-plus">+</button>
                </div>
                </div>
                
                </div>`);
                
                $('.guests-dropdown__field_adults input').val($('#edit-adults').val());
                $('.guests-dropdown__field_children input').val($('#edit-children').val());
                
                $('#edit-adults').attr('max', 9);
                $('#edit-children').attr('max', 9);
            });
            
            $('#edit-guests-wrapper label').on('click', function(event) {
                event.stopPropagation();
            });
            
            $('.guests-dropdown .btn-minus')
            .once()
            .on('click', function() {
                let input = $(this)
                .closest('.guests-dropdown__control')
                .find('input');
                
                if (input.val() == 1) {
                    // console.log('to zero..');
                    $(this).prop('disabled', true);
                }
                
                if (input.val() == 9) {
                    $(this)
                    .parent()
                    .find('.btn-plus')
                    .prop('disabled', false);
                }
                
                if (input.val() <= 0) {
                    input.val(0);
                } else {
                    input.val(+input.val() - +1);
                }
                
                $('#edit-adults').val($('.guests-dropdown__field_adults input').val());
                $('#edit-children').val($('.guests-dropdown__field_children input').val());
            });
            
            $('.guests-dropdown .btn-plus')
            .once()
            .on('click', function() {
                let input = $(this)
                .closest('.guests-dropdown__control')
                .find('input');
                
                if (input.val() <= 0) {
                    // console.log('from zero..');
                    $(this)
                    .parent()
                    .find('.btn-minus')
                    .prop('disabled', false);
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
            
            $('#edit-adults').on('change', function() {
                $('.guests-dropdown__field_adults input').val($('#edit-adults').val());
            });
            
            $('#edit-children').on('change', function() {
                $('.guests-dropdown__field_children input').val($('#edit-children').val());
            });
        },
    };
})(jQuery, Drupal);
