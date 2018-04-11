const initialize = function(){

const container = document.getElementById('main-map');
const center = {lat:48.858370, lng:-84.67};
const newMarker = {lat:55.861152, lng:-4.250196};
const zoom = 14;




const map = new MapWrapper(container, center, zoom);

map.addMarker(center);
const marker = map.addMarker(newMarker);
map.addMarkerInfo(marker, "<h1>Glasgows most Famous Square!</h1>");



const bounceButton = document.getElementById('button-bounce-markers');
bounceButton.addEventListener('click', map.bounceMarkers.bind(map));

const chicagoButton = document.getElementById('locate');
chicagoButton.addEventListener('click', function(){
  const chicago = {lat:41.878114, lng:-87.629798};
  map.toAPlace(chicago);
  map.addMarker(chicago);
});

const checkLocation = document.getElementById('checkLocation');
checkLocation.addEventListener("click", function(){
  navigator.geolocation.getCurrentPosition(function(position){
    const myLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
    map.toAPlace(myLocation);
  });
});

map.addClickEvent();

}



window.addEventListener('DOMContentLoaded', initialize);
