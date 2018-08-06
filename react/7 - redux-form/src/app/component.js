import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import EditStudent from '../edit-student';
import Header from '../header';
import NewStudent from '../new-student';
import Students from '../students';


const AppComponent = () => (
  <Fragment>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Students} />
          <Route path="/new" exact component={NewStudent} />
          <Route path="/:id" component={EditStudent} />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    </Router>
  </Fragment>
);

export default AppComponent;
