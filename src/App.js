import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
          <Header />
          
          <div className="selecor">
            This is a selector
          </div>
        
          <Table />
          

          <div className="map">
            Put map here
          </div>
        </div>
      </div>
    );
  }
}

export default App;
