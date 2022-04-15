(function ($, Drupal) {
    Drupal.behaviors.selectForm = {
        attach: function (context, settings) {

            $('header select').once('headerselect').each(function() {
                const _this = $(this),
                selectOption = _this.find('option'),
                selectOptionLength = selectOption.length,
                // selectedOption = selectOption.filter(':selected'),
                duration = 450;

                _this.wrap('<div class="select"></div>');
                
                $('<div>', {
                    class: 'new-select',
                    text: _this.children('option:selected').text()
                }).insertAfter(_this);
                
                const selectHead = _this.next('.new-select');

                $('<div>', {
                    class: 'new-select__list'
                }).insertAfter('#edit-room-wrapper > input.form-submit');

                _this.remove();

                const selectList = $('#edit-room-wrapper > .new-select__list');

                for (let i = 1; i < selectOptionLength; i++) {
                    $('<div>', {
                        class: 'new-select__item',
                        html: $('<span>', {
                            text: selectOption.eq(i).text()
                        })
                    })
                    .attr('data-value', selectOption.eq(i).val())
                    .appendTo(selectList);
                }

                const btnFormSea = $('.form-item-room')

                const selectItem = selectList.find('.new-select__item');

                btnFormSea.on('click', function(e) {
                    selectHead.toggleClass('on');
                    selectList.slideToggle(duration);
                    // $('#edit-room-wrapper').toggleClass('open');
                });

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

                $('body').on( 'click', function(e) {
                    if ($(e.target).closest(btnFormSea).length)
                        return;

                    if(selectHead.hasClass('on')) {
                        selectHead.removeClass('on');
                        $('#edit-room-wrapper').removeClass('active');
                        selectList.slideUp(duration);
                        // console.log('close from body')
                    }
                });
            });
        }
    };
})(jQuery, Drupal);