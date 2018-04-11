const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker);
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

MapWrapper.prototype.toChicago = function () {
  this.googleMap.setCenter({lat:41.878114, lng:-87.629798});
};

MapWrapper.prototype.addMarkerInfo = function (location, info) {
  this.markers.forEach(function(marker){
    if(marker.position === location){
      const infoWindow = new google.maps.InfoWindow({
        content: info
      });
      marker.addListener('click', function(){
        infoWindow.open(this.googleMap, marker);
      }.bind(this));
    }
  });

};
