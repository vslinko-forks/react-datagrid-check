import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Griddle from 'griddle-react'
require('react-datagrid/index.css')
var DataGrid = require('react-datagrid')
import CustomCellData from './CustomCell'

var grid = "unset";

var data     =  [
  { id: 0, index: 1, firstName: 'Click-me', lastName: 'London', country: 'jon@gmail.com'},
  { id: 0, index: 1, firstName: 'Click-me', lastName: 'London', country: 'jon@gmail.com'},
  { id: 0, index: 1, firstName: 'Click-me', lastName: 'London', country: 'jon@gmail.com'}
];

var columns = [
  { name: 'index', title: '#', width: 50 },
  { name: 'firstName', render: function(v){return <CustomCellData grid={grid} data={v}/>} },
  { name: 'lastName'  },
  { name: 'country' }
]

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

var mapStateToProps = function(state){
  return {globalProps:state.globalProps};
};

export default class App extends React.Component {
  reload (){
    console.log("reload");
    data[0]['firstName']+="-more";
    grid.refs.grid.data=data;
    grid.refs.grid.reload();
    grid.setState({})
  }
  render (){
    var d = <div>
      <p>
        <button onClick={this.reload}>Reload modified data - for testing without actions</button>
      </p>
      <DataGrid
          ref="grid"
          dataSource={data}
          idProperty='id'
          columns={columns}
          style={{height: 500}}
          rowStyle={rowStyle}
      />
    </div>;
    grid=this;
    return d;
  }
  constructor(props, context) {
    super(props, context);
    //grid=this;
  }
}