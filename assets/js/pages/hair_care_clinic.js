
// document.addEventListener("DOMContentLoaded", function () {
//     let map;
//     let currentPosition;
//     let markers = [];
//     const clinicsData = [
//         { name: 'DCDC', location: { lat: 25.0422681, lng: 121.5424544 }, region: '台北市', type: '植髮診所' },
//         { name: 'DCDC', location: { lat: 24.8153831, lng: 121.0217587 }, region: '新竹縣', type: '植髮診所' },
//         { name: 'DCDC', location: { lat: 22.6610928, lng: 120.3075843 }, region: '高雄市', type: '植髮診所' },
//         { name: 'DCDC', location: { lat: 24.1570995, lng: 120.6468087 }, region: '台中市', type: '植髮診所' },
//         { name: 'DCDC', location: { lat: 25.0425358, lng: 121.5452807 }, region: '台北市', type: '植髮診所' },
//         { name: 'i hair 風華御髮', location: { lat: 25.0278009, lng: 121.5195911 }, region: '台北市', type: '植髮診所' },
//         { name: 'i hair 風華御髮', location: { lat: 23.8251276, lng: 119.4853344 }, region: '桃園市', type: '植髮診所' },
//         { name: 'i hair 風華御髮', location: { lat: 24.8071615, lng: 120.7321717 }, region: '新竹縣', type: '植髮診所' },
//         { name: 'i hair 風華御髮', location: { lat: 24.1568519, lng: 119.4270025 }, region: '台中市', type: '植髮診所' },
//         { name: 'i hair 風華御髮', location: { lat: 24.1326835, lng: 117.4440798 }, region: '台南市', type: '植髮診所' },
//         { name: 'i hair 風華御髮', location: { lat: 22.6647775, lng: 120.2978912 }, region: '高雄市', type: '植髮診所' },
//         { name: '勻禾妍美學健康診所', location: { lat: 22.6856517, lng: 120.3071755 }, region: '高雄市', type: '美學診所' },
//         { name: 'H&H 醫髮診所', location: { lat: 25.04589, lng: 120.3241616 }, region: '台北市', type: '頭髮護理診所' },
//         { name: 'H&H 醫髮診所', location: { lat: 24.161399, lng: 119.4262235 }, region: '台中市', type: '頭髮護理診所' }
//     ];

//     const regionSelect = document.getElementById("Region");
//     const clinicTypeSelect = document.getElementById("Clinic");

//     // 檢查DOM元素是否存在
//     if (regionSelect && clinicTypeSelect) {
//         regionSelect.addEventListener("change", performSearch);
//         clinicTypeSelect.addEventListener("change", performSearch);
//     }

//     initMap();

// function initMap() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             function (position) {
//                 currentPosition = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude,
//                 };
//                 initializeMap(currentPosition);
//             },
//             function (error) {
//                 console.error("獲取地理位置失敗:", error);
//                 initializeMap({ lat: 25.0422681, lng: 121.5424544 });
//             }
//         );
//     } else {
//         console.error("瀏覽器不支持地理位置");
//         initializeMap({ lat: 25.0422681, lng: 121.5424544 });
//     }
// }

// function initializeMap(position) {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: position,
//         zoom: 16,
//     });
//     performSearch();
//     const autocomplete = new google.maps.places.Autocomplete(
//         document.getElementById("Region"),
//         {
//             types: ["geocode"],
//             componentRestrictions: { country: "TW" },
//         }
//     );

//     autocomplete.addListener("place_changed", function () {
//         const place = autocomplete.getPlace();
//         if (!place.geometry || !place.geometry.location) {
//             return;
//         }
//         map.setCenter(place.geometry.location);
//         map.setZoom(16);
//         performSearch();
//     });


// }

//     function performSearch() {
//         const selectedRegion = regionSelect.value;
//         const selectedClinicType = clinicTypeSelect.value;
//         searchOnMap(clinicsData, selectedRegion, selectedClinicType);
//     }

//     function searchOnMap(clinicsData, region, clinicType) {
//         markers.forEach(function (marker) {
//             marker.setMap(null);
//         });
//         markers = [];
//         const matchingClinics = clinicsData.filter((clinic) => {
//             return clinic.region === region && clinic.type === clinicType;
//         });

//         matchingClinics.forEach((clinic) => {
//             const marker = new google.maps.Marker({
//                 position: clinic.location,
//                 map: map,
//                 title: clinic.name,
//             });

//             marker.addListener("click", function () {
//                 const infoWindow = new google.maps.InfoWindow({
//                     content: `<strong>${clinic.name}</strong><br>地區: ${clinic.region}<br>類型: ${clinic.type}`,
//                 });
//                 infoWindow.open(map, marker);
//             });

//             markers.push(marker);
//         });
//     }

//     function setMarkers(map) {
//         const image = {
//             url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//             size: new google.maps.Size(20, 32),
//             origin: new google.maps.Point(0, 0),
//             anchor: new google.maps.Point(0, 32),
//         };
//         const shape = {
//             coords: [1, 1, 1, 20, 18, 20, 18, 1],
//             type: "poly",
//         };

//         for (let i = 0; i < beaches.length; i++) {
//             const beach = beaches[i];

//             new google.maps.Marker({
//                 position: { lat: beach[1], lng: beach[2] },
//                 map,
//                 icon: image,
//                 shape: shape,
//                 title: beach[0],
//                 zIndex: beach[3],
//             });
//         }
//     }
// });
