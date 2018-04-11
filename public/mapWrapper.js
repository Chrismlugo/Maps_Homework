const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords, text) {
  const marker = new google.maps.Marker({
    position: coords,
    animation: google.maps.Animation.DROP,
    map: this.googleMap
  })
  this.markers.push(marker);
  return marker;
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event){

    const coords = {lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };

    this.addMarker(coords);

    // console.log(event);
    // console.log(event.latLng.lat());
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
};

MapWrapper.prototype.toAPlace = function (coords) {
  this.googleMap.setCenter(coords);
};

MapWrapper.prototype.addMarkerInfo = function (marker, text) {

  const info = new google.maps.InfoWindow({
    content: text
  });

  marker.addListener('click', function(){
    debugger;
    info.open(this, marker);
  });

};
