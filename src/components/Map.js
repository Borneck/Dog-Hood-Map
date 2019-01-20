import React, { Component } from 'react';
import { scriptLoader } from '../actions/index';
import { craetedMarkers, markers, markerAnmiation } from '../actions/markers';


import './Map.css';


class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.loadMap();
    window.initMap = this.initMap;
  }

  loadMap = () => {
    scriptLoader("https://maps.googleapis.com/maps/api/js?key=AIzaSyBTz-k0HVuBUJ65fRFvbBeoF-CxvFhNvCs&callback=initMap")
  }

  initMap = () => {
    const location = this.state.data;
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.6487226, lng: 7.7688058},
      zoom: 12
    });    

    craetedMarkers({map});
    
    
   
  
  }

  
 
    
        
    

 
  

  render() {
    return (
      <div className="App-map" id="map" >
      </div>
    );
  }
}



export default Map;
