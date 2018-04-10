const initialize = function(){

const container = document.getElementById('main-map');
const center = {lat:48.858370, lng:-84.67};
const newMarker = {lat:55.861152, lng:-4.250196};
const zoom = 14;
const info = document.createElement('p');
info.innerText = "Glasgow's most popular square!";



const map = new MapWrapper(container, center, zoom);

map.addMarker(center);
map.addMarker(newMarker);
map.addMarkerInfo(newMarker, info);


const bounceButton = document.getElementById('button-bounce-markers');
bounceButton.addEventListener('click', map.bounceMarkers.bind(map));

const chicagoButton = document.getElementById('locate');
chicagoButton.addEventListener('click', map.toChicago.bind(map));

map.addClickEvent();

}



window.addEventListener('DOMContentLoaded', initialize);
