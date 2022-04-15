(function ($, Drupal) {
    Drupal.behaviors.mapbox = {
        attach: function (context, settings) {
            $('#map').once('buildMap').each(function () {
                var accessToken = settings.mapbox.accessToken;
                var style = settings.mapbox.style;
                var longitude = settings.mapbox.longitude;
                var latitude = settings.mapbox.latitude;
                var center = [longitude, latitude];
                var zoom = settings.mapbox.zoom;
                var markerUrl = settings.mapbox.marker;

                var container = 'map';

                mapboxgl.accessToken = accessToken;

                var map = new mapboxgl.Map({
                    container: container,
                    style: style,
                    center: center,
                    zoom: zoom,
                });

                if (markerUrl) {
                    var marker = document.createElement('div');
                    var markerInner = document.createElement('img');

                    marker.className = 'marker';
                    marker.style.width = '23px';
                    marker.style.height = '34px';

                    markerInner.src = markerUrl;

                    marker.appendChild(markerInner);

                    var options = {
                        anchor: settings.mapbox.anchor,
                    };

                    new mapboxgl.Marker(marker, options)
                        .setLngLat(center)
                        .addTo(map);

                    var canvas = map.getCanvasContainer();

                    function getRoute(end) {
                        // make a directions request using cycling profile
                        // an arbitrary start will always be the same
                        // only the end or destination will change
                        var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + longitude + ',' + latitude + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

                        // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
                        var req = new XMLHttpRequest();
                        req.open('GET', url, true);
                        req.onload = function() {
                            var json = JSON.parse(req.response);
                            var data = json.routes[0];
                            var route = data.geometry.coordinates;
                            var geojson = {
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'LineString',
                                    coordinates: route
                                },
                            };
                            // if the route already exists on the map, reset it using setData
                            if (map.getSource('route')) {
                                map.getSource('route').setData(geojson);
                            } else { // otherwise, make a new request
                                map.addLayer({
                                    id: 'route',
                                    type: 'line',
                                    source: {
                                        type: 'geojson',
                                        data: {
                                            type: 'Feature',
                                            properties: {},
                                            geometry: {
                                                type: 'LineString',
                                                coordinates: geojson
                                            },
                                        },
                                    },
                                    layout: {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    paint: {
                                        'line-color': '#F09C40',
                                        'line-width': 5,
                                        'line-opacity': 0.75
                                    },
                                });
                            }
                            // add turn instructions here at the end
                        };
                        req.send();
                    }

                    if($('.path-attractions').length > 0) {
                        map.once('loadMap').on('load', function () {
                            getRoute([longitude, latitude]);

                            map.addLayer({
                                id: 'point',
                                type: 'circle',
                                source: {
                                    type: 'geojson',
                                    data: {
                                        type: 'FeatureCollection',
                                        features: [{
                                            type: 'Feature',
                                            properties: {},
                                            geometry: {
                                                type: 'Point',
                                                coordinates: [longitude, latitude]
                                            },
                                        },
                                        ],
                                    },
                                },
                                paint: {
                                    'circle-radius': 5,
                                    'circle-color': 'white',
                                    'circle-stroke-color': 'black',
                                    'circle-stroke-width': 2,
                                },
                            });
                        });
                    }

                    $('.view-attractions .views-col').once('buildRoute').click(function() {
                        var lat = $(this).find('.latlon-lat').text();
                        var lon = $(this).find('.latlon-lon').text();

                        coords = [lon, lat];

                        var end = {
                            type: 'FeatureCollection',
                            features: [{
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: 'Point',
                                    coordinates: coords,
                                },
                            },
                            ],
                        };
                        if (map.getLayer('end')) {
                            map.getSource('end').setData(end);
                        } else {
                            map.addLayer({
                                id: 'end',
                                type: 'circle',
                                source: {
                                    type: 'geojson',
                                    data: {
                                        type: 'FeatureCollection',
                                        features: [{
                                            type: 'Feature',
                                            properties: {},
                                            geometry: {
                                                type: 'Point',
                                                coordinates: coords,
                                            },
                                        }],
                                    },
                                },
                                paint: {
                                    'circle-radius': 5,
                                    'circle-color': 'white',
                                    'circle-stroke-color': 'black',
                                    'circle-stroke-width': 2,
                                },
                            });
                        }
                        getRoute(coords);
                    });
                }
            });
        },
    };
})(jQuery, Drupal)