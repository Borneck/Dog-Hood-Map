import React, { Component } from 'react';

import './Map.css';

class Map extends Component {

  componentDidMount() {
    this.loadMap();
    window.initMap = this.initMap;
  }

  loadMap = () => {
    scriptLoader("https://maps.googleapis.com/maps/api/js?key=AIzaSyBTz-k0HVuBUJ65fRFvbBeoF-CxvFhNvCs&callback=initMap")
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return (
      <div className="App-map" id="map" >
      </div>
    );
  }
}

function scriptLoader(url) {
  const index = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);

}

export default Map;
