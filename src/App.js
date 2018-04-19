import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Selecor from './components/Selector'
import sensorData from './data/data.json'
import Map from './components/Map'

class App extends Component {
  constructor(props) {
      super(props)
      // select the sensor with voltage less than the default value(120) into a tempData array
      // this list will be passed to the Table component to update the table
      const DEFAULT_VOLTAGE = 120;
      var tmpData = [];
      for (var i = 0; i < sensorData.length; i ++) {
        if (sensorData[i].value <= DEFAULT_VOLTAGE) {
          tmpData.push(sensorData[i]);
        }
      }
      // generate the geojson object for the map component
      var tempgeos = [];
      tmpData.map(function(item, key){
        var newgeo = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [
              item.coordinates.lng,
              item.coordinates.lat
            ]
          }
        }
        tempgeos.push(newgeo);
      });
      // setup the state of the App component
      this.state = {
          voltage: DEFAULT_VOLTAGE,
          filteredData : tmpData,
          geojson: tempgeos 
    }
  }
  
  // Call back function to be called in the selector component,
  // this function will pass the value from the slider to the App component,
  // and generate a new sensor list with value less than the returned value,
  // also generate a new geojson object for the Map component
  AppCBForNewVoltage = (dataFromSelector) => {
    this.setState({voltage : dataFromSelector});
    // generate a new list of sensors
    var tmpData = [];
    for (var i = 0; i < sensorData.length; i ++) {
      if (sensorData[i].value <= this.state.voltage) {
        tmpData.push(sensorData[i]);
      }
    }
    // generate a new geojson object for the Map component
    var tempgeos = [];
    tmpData.map(function(item, key){
        var newgeo = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [
              item.coordinates.lng,
              item.coordinates.lat
            ]
          }
        }
        tempgeos.push(newgeo);
      });
    this.setState({filteredData : tmpData});
    this.setState({geojson : tempgeos}); 
  }
  
  render() {
    return (
      <div className='App'>
        <div className="container">
          
          <Header />
          
          <Selecor AppCBForNewVoltage={this.AppCBForNewVoltage}/>
                  
          <Table filteredData={this.state.filteredData}/>
          
          <Map geojson={this.state.geojson}/>
          
        </div>
      </div>
    );
  }
}

export default App;
