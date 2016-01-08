import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Griddle from 'griddle-react'
import 'react-datagrid/index.css'
import CustomGrid from './CustomGrid'
import CustomCell from './CustomCell'

function rowStyle(data, props) {
  const style = {};
  
  if (props.index % 4 === 0) {
    style.color = 'green';
  }
  
  if (data.country === 'USA') {
    style.background = '#FFD3D3';
    style.fontWeight = 'bold';
  }
  
  return style;
}

const columns = [
  { name: 'index', title: '#', width: 50 },
  { name: 'firstName', render: (cellValue, rowObject) => <CustomCell data={cellValue} id={rowObject.id} /> },
  { name: 'lastName'  },
  { name: 'country' }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CustomGrid
          idProperty="id"
          rowStyle={rowStyle}
          columns={columns}
        />
      </div>
    );
  }
}
