import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Selector extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 120
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

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
    const { value } = this.state
    return (
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
    )
  }
}

export default Selector;

