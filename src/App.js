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
      var tmpData = [];
      for (var i = 0; i < sensorData.length; i ++) {
        if (sensorData[i].value <= 120) {
          tmpData.push(sensorData[i]);
        }
      }
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
      this.state = {
          voltage: 120,
          filteredData : tmpData,
          geojson: tempgeos 
    }
  }

  

  AppCBForNewVoltage = (dataFromSelector) => {
    this.setState({voltage : dataFromSelector});
    var tmpData = [];
    for (var i = 0; i < sensorData.length; i ++) {
      if (sensorData[i].value <= this.state.voltage) {
        tmpData.push(sensorData[i]);
      }
    }
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
