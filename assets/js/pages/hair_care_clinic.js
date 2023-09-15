import 'default-passive-events';

let map;
let markers = [];
let infoWindow;
const beaches = [
    ["DCDC生髮診所總院", 25.0422681, 121.5424544, "植髮診所", "台北市", "https://dcdchair.com.tw/clinics/5", "台北市大安區大安路一段75巷21號2樓"],
    ["DCDC生髮診所竹北院區", 24.8153831, 121.0217587, "植髮診所", "新竹縣", "https://dcdchair.com.tw/clinics/6", "新竹縣竹北市自強南路182號3樓"],
    ["DCDC生髮診所高雄院區", 22.6610928, 120.3075843, "植髮診所", "高雄市", "https://dcdchair.com.tw/clinics/7", "高雄市左營區明誠二路180號2樓"],
    ["DCDC生髮診所台北旗艦店", 25.0425358, 121.5452807, "植髮診所", "台北市", "https://dcdchair.com.tw/clinics/8", "台北市大安區敦化南路一段190巷12號"],
    ["DCDC生髮診所台中院區", 24.157512, 120.6470562, "植髮診所", "台中市", "https://dcdchair.com.tw/clinics/11", "台中市西屯區文心路二段566之1號3樓之2"],
    ["ihair 風華御髮台北古亭店", 25.0278009, 121.522166, "美學診所", "台北市", "https://www.ihairtransplantclinic.com/taipei/ihair-taipei", " 台北市大安區羅斯福路二段33號4樓"],
    ["ihair 風華御髮桃園中正店", 24.9965827, 121.3093853, "美學診所", "桃園市", "https://www.ihairtransplantclinic.com/taoyuan/ihair-taoyuan", " 桃園市桃園區中正路271號3樓"],
    ["ihair 風華御髮新竹竹北高鐵店", 24.8071615, 121.0370423, "美學診所", "新竹縣", "https://www.ihairtransplantclinic.com/hsinchu/ihair-hsinchu", "新竹縣竹北市高鐵二路38號一樓"],
    ["ihair 風華御髮台中新國店", 24.1568519, 120.6464849, "美學診所", "台中市", "https://www.ihairtransplantclinic.com/taichung/ihair-taichung", "台中市西屯區市政北一路1號1樓 1-D2"],
    ["ihair 風華御髮台南崇明店", 22.9750387, 120.2226316, "美學診所", "台南市", "https://www.ihairtransplantclinic.com/tainan/ihair-tainan", "台南市東區崇明路377-1號2樓"],
    ["ihair 風華御髮高雄巨蛋店", 22.6647775, 120.3004661, "美學診所", "高雄市", "https://www.ihairtransplantclinic.com/kaohsiung/", "高雄市鼓山區文信路234號2樓"],
    ["勻禾妍美學健康診所", 22.6856517, 120.3071755, "美學診所", "高雄市", "https://www.icarebeauty.com.tw/", "高雄市左營區文學路25號"],
    ["H&H 醫髮診所", 25.04589, 121.5410691, "頭髮護理診所", "台北市", "https://www.2h.com.tw/", "台北市中山區復興南路一段36-9號9F"],

];
function initMap() {
    const mapElement = document.getElementById("map");
    const defaultPosition = { lat: 25.0422681, lng: 121.5424544 }; // 預設位置（台北市）

    map = new google.maps.Map(mapElement, {
        center: defaultPosition,
        zoom: 16,
    });
    infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                initializeMap(currentPosition);
            },
            function (error) {
                console.error("獲取地理位置失敗:", error);
                initializeMap(defaultPosition); // 使用預設位置
            }
        );
    } else {
        console.error("瀏覽器不支持地理位置");
        initializeMap(defaultPosition); // 使用預設位置
    }

    setMarkers(beaches);
}
function initializeMap(position) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 16,
    });
    infoWindow = new google.maps.InfoWindow();

    setMarkers(beaches);
}

const cityDropdown = document.getElementById("Region");
const clinicTypeDropdown = document.getElementById("Clinic");
cityDropdown.addEventListener("change", updateMapMarkers, { passive: true });
clinicTypeDropdown.addEventListener("change", updateMapMarkers, { passive: true });

function setMarkers(clinics) {
    clearMarkers();
    for (let i = 0; i < clinics.length; i++) {
        const clinic = clinics[i];
        const clinicName = clinic[0];
        const latLng = { lat: clinic[1], lng: clinic[2] };
        const marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: clinicName,
        });

        marker.addListener("click", function (event) {
            displayClinicInfo(clinic, event);
        });
        markers.push(marker);
    }
}

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}


function displayClinicInfo(clinic, event) {
    const clinicName = clinic[0];
    const clinicType = clinic[3];
    const clinicCity = clinic[4];
    const clinicOfficalWebsite = clinic[5];
    const clinicAddress = clinic[6];
    const contentString = `
        <div>
            <h2>${clinicName}</h2>
            <p>診所類型: ${clinicType}</p>
            <p>所在地區: ${clinicCity}</p>
            <p>官方網站: <a href="${clinicOfficalWebsite}" target="_blank">${clinicOfficalWebsite}</a></p>
            <p>地址: ${clinicAddress}</p>
        </div>
    `;
    infoWindow.setContent(contentString);
    infoWindow.open(map, event.target); // 使用事件對象的目標作為參數
}

function updateMapMarkers() {
    const selectedCity = cityDropdown.value;
    const selectedClinicType = clinicTypeDropdown.value;
    const filteredClinics = beaches.filter(clinic => {
        const clinicCity = clinic[4];

        return (selectedCity === "All" || clinicCity === selectedCity) &&
            (selectedClinicType === "All" || clinic[3] === selectedClinicType);
    });

    // 清除之前的標記
    clearMarkers();

    if (filteredClinics.length === 0) {
        window.alert("沒有找到相應的診所。");
        return;
    }

    // 設置新的標記
    setMarkers(filteredClinics);

    if (filteredClinics.length > 0) {
        const firstClinic = filteredClinics[0];
        const latLng = { lat: firstClinic[1], lng: firstClinic[2] };
        map.setCenter(latLng);
    }
}

