import $ from "jquery";

let map;
let currentPosition;
let markers = [];

function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
        currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: currentPosition,
            zoom: 16,
        });

        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('Region'), {
            types: ['geocode'],
            componentRestrictions: { country: 'TW' },
        });

        autocomplete.addListener('place_changed', function () {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
                return;
            }
            map.setCenter(place.geometry.location);
            map.setZoom(16);
        });
    });
}

const regionSelect = document.getElementById('Region');
const clinicTypeSelect = document.getElementById('ClinicType');
regionSelect.addEventListener('change', performSearch);
clinicTypeSelect.addEventListener('change', performSearch);
performSearch();

function performSearch() {
    const selectedRegion = regionSelect.value;
    const selectedClinicType = clinicTypeSelect.value;
    searchOnMap(selectedRegion, selectedClinicType);
}

function searchOnMap(region, clinicType) {
    // 清除地圖上的所有標記
    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    markers = [];

    const clinics = [
        { name: 'DCDC', location: { lat: 24.1570995, lng: 120.6507595 }, region: 'region1', type: 'clinicType1' },
        { name: 'i hair 風華御髮', location: { lat: 24.789, lng: 46.789 }, region: 'region2', type: 'clinicType2' },
    ];

    const matchingClinics = clinics.filter(clinic => clinic.region === region && clinic.type === clinicType);
    matchingClinics.forEach(clinic => {
        const marker = new google.maps.Marker({
            position: clinic.location,
            map: map,
            title: clinic.name,
        });
        markers.push(marker);
    });
}