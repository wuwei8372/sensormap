import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
          <Header />
          
          <div className="selecor">
            This is a selector
          </div>
        
          <div className="table">
            <ul>
              <li>This is a list</li>
            </ul>
          </div>

          <div className="map">
            Put map here
          </div>
        </div>
      </div>
    );
  }
}

export default App;
