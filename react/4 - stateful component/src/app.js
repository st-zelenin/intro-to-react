import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import A from './a';
import B from './b';
import C from './c';
import Header from './header';


const AppComponent = () => (
  <Fragment>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={A} />
          <Route path="/b" component={B} />
          <Route path="/c" component={C} />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    </Router>
  </Fragment>
);

export default AppComponent;
