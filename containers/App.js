import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Griddle from 'griddle-react'
require('react-datagrid/index.css')
import CustomGrid from './CustomGrid'
import CustomCell from './CustomCell'

export default class App extends React.Component {
  render (){
    function rowStyle(data, props){
      var style = {}
      if (props.index % 4 == 0){
        style.color = 'green'
      }
      if (data.country == 'USA'){
        style.background = '#FFD3D3'
        style.fontWeight = 'bold'
      }
      return style
    }
    var columns = [
      { name: 'index', title: '#', width: 50 },
      { name: 'firstName', render: function(cellValue,rowObject){return <CustomCell data={cellValue} id={rowObject.id}/>} },
      { name: 'lastName'  },
      { name: 'country' }
    ]
    return <div>
      <CustomGrid
          idProperty='id'
          rowStyle={rowStyle}
          columns={columns}
          setState={this.setState}
      />
    </div>;
  }
  constructor(props, context) {
    super(props, context);
  }
}