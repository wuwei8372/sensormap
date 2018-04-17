import React, { Component } from 'react';
import sensorData from '../data/data.json'

class Table extends Component {
	constructor(props) {
      super(props)
		this.state = {
			data: sensorData
		}
	}
  render() {
    return (
      <div className="Table">
      	<p>{sensorData.length} Devices</p>
      	<div className="table">
            <table>
            	<tbody>
            	<tr>
            		<td>Device</td>
	            	<td>Category</td>
            		<td>Value</td>
            	</tr>
            	{this.state.data.map(function(item, key){
            		return (
            			<tr key = {key}>
	            			<td>{item.deviceId}</td>
	            			<td>{item.category}</td>
            				<td>{item.value}V</td>
            			</tr>
            			)
            		})}
            	</tbody>
            </table>
      	</div>
      </div>
    );
  }
}

export default Table;