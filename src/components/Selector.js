import React, { Component } from 'react'
import Slider from 'react-rangeslider'
// import 'react-rangeslider/lib/index.css'

class Selector extends Component {
  constructor (props, context) {
    super(props, context)
    const DEFAULT_VOLTAGE = 120;
    this.state = {
      value: DEFAULT_VOLTAGE
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  // every time the slider was triggered, the new value will be passed to the Map component
  handleChange = value => {
    
    this.setState({
      value: value
    })
    this.props.AppCBForNewVoltage(value);

  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    var { value } = this.state
    return (
      <div className='sliderContainer'>
        <div className='slider'>
          <p>Ave voltage</p>
          <Slider
            min={114}
            max={126}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <div className='value'>{value}V</div>
        </div>
      </div>
    )
  }
}

export default Selector;

