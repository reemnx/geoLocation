'use strict';
var map;

function onInit() {
    renderPlaces();
    setUsrPref();
    initMap();
}

function initMap(lat = 29.55805, lng = 34.94821) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: lng },
        zoom: 12
    });
    var marker = new google.maps.Marker({ position: map.center, map: map });
    map.addListener('click', event => {
        console.log(event);
        var location = prompt('Whats the location name?');
        if (!location) {
            alert('Name cant be blank')
            return;
        }
        var lat = event.latLng.toJSON().lat;
        var lng = event.latLng.toJSON().lng;
        createNewPlace(lat, lng, location);
    });
}

function onCurrPos() {
    getPosition();
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(setCurrLocation, handleLocationError);
}

function setCurrLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function onSaveInfo(ev, elForm) {
    ev.stopPropagation();
    var bgColor = elForm.querySelector('#usrBgColor').value
    var txtColor = elForm.querySelector('#usrTxtColor').value
    var birtDate = elForm.querySelector('#usrBirthDate').value
    var age = elForm.querySelector('#usrAge').value
    var email = elForm.querySelector('#usrEmail').value
    saveInfo(bgColor, txtColor, birtDate, age, email);

}
function renderHoroscopModal() {
    var rndNum = getRandomIntInclusive(0, gHoroscops.length - 1);
    document.querySelector('.horoscop-modal').style.display = "flex";
    var header = document.querySelector('.scop-sign');
    var img = document.querySelector('.sign-img');
    var desc = document.querySelector('.sign-desc');
    header.innerHTML = gHoroscops[rndNum].sign;
    img.src = gHoroscops[rndNum].img;
    desc.innerHTML = gHoroscops[rndNum].desc;

}
function setUsrPref() {
    var prefObj = loadFromStorage(KEY);
    var horoscopBg = document.querySelector('.horoscop');
    var hososcopHeader = document.querySelector('.horoscop h2');
    horoscopBg.style.backgroundColor = prefObj.bgColor;
    hososcopHeader.style.color = prefObj.txtColor;
    renderHoroscopModal();
}
function renderPlaces() {
    var places = getPlaces();
    var elDiv = document.querySelector('.render-places');
    var strHTML = '';
    for (var i = 0; i < places.length; i++) {
        strHTML += `
        <div onclick="onPosClicked(${i})" class="pos-container">
        <h3>Location: ${places[i].name}</h3>
        <h4>lat: ${places[i].lat}</h4>
        <h4>lng: ${places[i].lng}</h4>
        <button class="place-del" onClick=delPlace(${i})>Delete</button>
    </div>
        `
    }
    elDiv.innerHTML = strHTML;
}
function onPosClicked(idx) {
    console.log(idx);
    posClicked(idx);
}
function posClicked(idx){
    var lat = gPlaces[idx].lat ;
    var lng = gPlaces[idx].lng ;
    initMap(lat, lng);
}