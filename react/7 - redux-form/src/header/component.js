import React, { Component } from 'react';

const HeaderComponent = ({ routes, onRouteClick }) => (
  <div>
    {routes.map((route) => (
      <a
        onClick={() => onRouteClick(route.route)}
        key={route.route}
        href="javascript:;"
        style={{ padding: 20 }}
      >
        {route.name}
      </a>
    ))}
  </div>
);

export default HeaderComponent;
