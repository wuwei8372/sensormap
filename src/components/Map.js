import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid3V3ZWk4MzcyIiwiYSI6ImNqZzQ5cjF6czF5ZW0ycXFwZ2c1dDhnNm8ifQ.nt0MB7_kgnqN2EiyP8sXAQ';


class Map extends Component {
  constructor(props: Props) {
    super(props);
    const tmpmap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-84.32693481445312, 33.69806524140501],
      zoom: 10
    });
    this.state = {
      lat: 33.69806524140501,
      lng: -84.32693481445312,
      zoom: 10,
      currentMap: tmpmap
    };
  }

  componentWillReceiveProps() {
        this.state.currentMap.getSource("pointsSource").setData({
          type: "geojson",
          data: {
          "type": "FeatureCollection",
          "features": this.props.geojson
          } 
          })
    }
  
  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });

    this.setState({
      currentMap: map
    })
      

  map.on('load', () =>{


    

    map.addSource("pointsSource", {
      type: "geojson",
      data: {
      "type": "FeatureCollection",
      "features": this.props.geojson
      } 
    });
    
    map.addLayer({
      id: "points",
      source: "pointsSource",
      type: "circle"
    });

    

  });
  }
  
  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className="Map">
        <div id="map" className="map" />
      </div>
    );
  }
}

export default Map;