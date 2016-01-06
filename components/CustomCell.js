import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class CustomCell extends React.Component {
  render(){
    return (<div className="custom-row-card"><strong><a onClick={this.props.onElementClick}>{this.props.data}</a></strong></div>);
  }
};
