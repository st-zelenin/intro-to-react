import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  routes = [
    { name: 'page A', route: '/a' },
    { name: 'page B', route: '/b' },
    { name: 'page C', route: '/c' },
  ];

  handleRouteClick = (route) => {
    this.props.history.push(route);
  }

  render() {
    return (
      <div>
        {this.routes.map((route) => (
          <a
            onClick={() => this.handleRouteClick(route.route)}
            key={route.route}
            href="javascript:;"
            style={{padding: 20}}
          >
            {route.name}
          </a>
        ))}
      </div>
    );
  };
}

export default withRouter(Header);
