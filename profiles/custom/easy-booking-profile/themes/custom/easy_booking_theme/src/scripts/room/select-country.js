(function ($, Drupal) {
    Drupal.behaviors.selectCountryForm = {
        attach: function (context, settings) {

            $('main select').once('mainselect').each(function() {
                const _this = $(this),
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

                const selectCountryHead = _this.next('.new-select-country');
                $('<div>', {
                    class: 'new-select-country__list'
                }).insertAfter(selectCountryHead);

                const selectCountryList = selectCountryHead.next('.new-select-country__list');
                for (let i = 1; i < selectOptionLength; i++) {
                    $('<div>', {
                        class: 'new-select-country__item',
                        html: $('<span>', {
                            text: selectOption.eq(i).text()
                        })
                    })
                    .attr('data-value', selectOption.eq(i).val())
                    .appendTo(selectCountryList);
                }

                const selectCountryItem = selectCountryList.find('.new-select-country__item');

                selectCountryHead.once().on('click', function() {
                    if ( !$(this).hasClass('on') ) {
                        $(this).addClass('on');
                        selectCountryList.slideDown(duration);

                        selectCountryItem.on('click', function() {
                            let chooseItem = $(this).data('value');

                            $('select').val(chooseItem).attr('selected', 'selected');
                            selectCountryHead.text( $(this).find('span').text() );

                            selectCountryList.slideUp(duration);
                            selectCountryHead.removeClass('on');
                        });

                    } else {
                        selectCountryHead.removeClass('on');
                        selectCountryList.slideUp(duration);
                    }
                });

                $('body').on( 'click', function(e) {
                    if ($(e.target).closest(selectCountryHead).length)
                        return;

                        selectCountryHead.removeClass('on');
                        selectCountryList.slideUp(duration);
                });
            });
        }
    };
})(jQuery, Drupal);