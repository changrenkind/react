import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <div>home</div>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
