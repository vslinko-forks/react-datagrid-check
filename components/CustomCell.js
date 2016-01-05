import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class CustomCellData extends React.Component {
  render(){
    if (this.props.state_is_changed)
      this.props.grid.reload();
    return (<div className="custom-row-card"><strong><a onClick={this.props.onElementClick}>{this.props.data}</a></strong></div>);
  }
};
