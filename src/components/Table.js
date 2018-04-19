import React, { Component } from 'react';


class Table extends Component {
	
  render() {
    return (
      <div className="Table">
      	<div className="table">
            <table>
            	<tbody>
                <p className="title">{this.props.filteredData.length} Devices</p>
              	<tr>
              		<td className="title">Device</td>
  	            	<td className="title">Category</td>
              		<td className="title">Value</td>
              	</tr>
              	{this.props.filteredData.map(function(item, key){
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