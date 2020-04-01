'useStrict'
const KEY2 = 'favPlaces';
var gPlaces = getPlaces();


function createNewPlace(lat, lng, location) {
    lat = lat.toFixed(2);
    lng = lng.toFixed(2);
    var place = {
        name: location,
        lat: lat,
        lng: lng
    }
    gPlaces.unshift(place);
    saveToStorage(KEY2, gPlaces);
    renderPlaces();
}

function delPlace(idx) {
    gPlaces.splice(idx, 1);
    saveToStorage(KEY2, gPlaces);
    renderPlaces();
}

function getPlaces() {
    if (!loadFromStorage(KEY2)) {
        return [];
    }
    else {
        return loadFromStorage(KEY2);
    }
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}