'use strict';

function initMap() {
    // Set map default options
    let options = {
        zoom: 8,
        center: {
            lat: 42.4668,
            lng: -70.9495
        }
    };

    // Initiate new map
    let map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (e) {
        // Add marker
        addMarker({
            coords: e.latLng
        });
    });

    // Add marker
    // let marker = new google.maps.Marker({
    //     position: {
    //         lat: -34.397,
    //         lng: 150.644
    //     },
    //     map: map,
    //     icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    // });

    // Add info window
    // let infoWindow = new google.maps.InfoWindow({
    //     content: '<h1>Test</h1>'
    // });

    // marker.addListener('click', function () {
    //     infoWindow.open(map, marker);
    // });

    // Add marker function
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon: props.iconImage
        });

        // Check for custom icon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        };

        // Check content
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        };
    }
};