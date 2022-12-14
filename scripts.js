let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.595, lng: -82.552 },
    zoom: 12,
  });
}

window.initMap = initMap;