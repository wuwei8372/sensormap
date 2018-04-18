import React, { Component } from 'react';


class Table extends Component {
	
  render() {
    return (
      <div className="Table">
      	<p>{this.props.filteredData.length} Devices</p>
      	<div className="table">
            <table>
            	<tbody>
            	<tr>
            		<td>Device</td>
	            	<td>Category</td>
            		<td>Value</td>
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