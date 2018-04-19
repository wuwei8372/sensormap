import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid3V3ZWk4MzcyIiwiYSI6ImNqZzQ5cjF6czF5ZW0ycXFwZ2c1dDhnNm8ifQ.nt0MB7_kgnqN2EiyP8sXAQ';


class Map extends Component {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      lat: 33.69806524140501,
      lng: -84.32693481445312,
      zoom: 10,
      map : null
    };
  }

    
  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });
      

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

    var nav = new mapboxgl.NavigationControl({
      // Hide rotation control.
      showCompass: false
    });
    map.addControl(nav, 'top-left');
    
    this.setState({
      map
    })   

  });
  }
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

//         this.state.map.getSource("pointsSource").setData(
//           {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -84.32693481445312,
//           33.69806524140501
//         ]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -84.25689697265625,
//           33.72776616734189
//         ]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -84.14840698242188,
//           33.65006512803725
//         ]
//       }
//     }
//   ]
// }
//           );  
   }
  
  
  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className="Map" ref={(x) => { this.container = x }}>
        
      </div>
    );
  }
}

export default Map;