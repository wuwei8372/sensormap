import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
// set the asscess token of mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoid3V3ZWk4MzcyIiwiYSI6ImNqZzQ5cjF6czF5ZW0ycXFwZ2c1dDhnNm8ifQ.nt0MB7_kgnqN2EiyP8sXAQ';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 33.69806524140501,
      lng: -84.32693481445312,
      zoom: 10,
      map : null
    };
  }
  // load the map   
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    // initiate map object
    const map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });
    // load the map
    map.on('load', () =>{
      // add the geojson object from App component as the source of the map
      map.addSource("pointsSource", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": this.props.geojson
        } 
      });
      // add the layer of the map to draw these points
      map.addLayer({
        id: "points",
        source: "pointsSource",
        type: "circle"
      });
      // add the navigation controller 
      var nav = new mapboxgl.NavigationControl({
        // Hide rotation control.
        showCompass: false
      });
      map.addControl(nav, 'top-left');
      // update the this.state.map
      this.setState({
        map
      })   
  });
  }
  // update the map when a new geojson object was passed from the App component
  componentWillReceiveProps(nextProps) {
      if (this.state.map === null) {
        return;
      }
      if (nextProps === this.props) {
        return;
      }
      console.log(this.state.map);
      this.state.map.getSource("pointsSource").setData({
        "type": "FeatureCollection",
        "features": this.props.geojson
      });
   }
    
  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className="Map" ref={(x) => { this.container = x }} />
    );
  }
}

export default Map;