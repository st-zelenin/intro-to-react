import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import HeaderComponent from './component';

class HeaderContainer extends Component {

  routes = [
    { name: 'students', route: '/' },
    { name: 'new', route: '/new' },
  ];

  handleRouteClick = (route) => {
    this.props.history.push(route);
  }

  render() {
    return (
      <HeaderComponent
        routes={this.routes}
        onRouteClick={this.handleRouteClick}
      />
    );
  };
}

export default withRouter(HeaderContainer);
