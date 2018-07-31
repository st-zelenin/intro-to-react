import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import A from './a';
import B from './b';
import C from './c';



const AppComponent = () => (
  <Fragment>
    <h1>I have routes!</h1>
    <Router>
      <Switch>
        <Route path="/" exact component={A} />
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Fragment>
);

export default AppComponent;
