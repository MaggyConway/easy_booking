(function ($, Drupal) {
    Drupal.behaviors.cardAttractions = {
        attach: function (context, settings) {
            const coordItemAttractions = {
            latitude: '',
            longitude: ''
        }

            $('.view-attractions .views-col').once().on('click', function() {
                $('.path--attractions .views-row .views-col').removeClass('active');
                $(this).addClass('active');

                /* info map */

                if( $('.path-attractions #map') ) {
                    let mapInfo = document.querySelector('.path--attractions .view-display-id-attractions_page .view-header');

                    let titleInfo = $(this).find('.views-field-field-attraction-name .field-content').html();

                    let addressLabelInfo = $(this).find('.views-field-field-address .views-label').html();
                    let addressInfo = $(this).find('.views-field-field-address .field-content').html();

                    let countryInfo = $(this).find('.views-field-field-country .field-content').html();

                    let destinationLabelInfo = $(this).find('.views-field-field-destination-1 .views-label').html();
                    let destinationInfo = $(this).find('.views-field-field-destination-1 .field-content').html();

                    let linkInfo = $(this).find('.views-field-nothing-1 .field-content').html();

                    if( $('.map-info-wrapper') ) {
                        $('.map-info-wrapper').remove();
                    }

                    mapInfo.insertAdjacentHTML("beforeend", `
                    <div class="map-info-wrapper">
                        <h3 class="title-info">${titleInfo}</h3>
                        <div class="map-info-content">
                            <div class="map-info-item">
                                <div class="map-info-label">${addressLabelInfo}</div>
                                <div class="map-info-text-wrapper">
                                    <div class="map-info-text">${addressInfo}</div>
                                    <div class="map-info-country">${countryInfo}</div>
                                </div>
                            </div>
                            <div class="map-info-item">
                                <div class="map-info-label">${destinationLabelInfo}</div>
                                <div class="map-info-text-wrapper">
                                    <div class="map-info-text">${destinationInfo}</div>
                                </div>
                            </div>
                        </div>
                    </div>`);
                }
            });
        }
    };
})(jQuery, Drupal);