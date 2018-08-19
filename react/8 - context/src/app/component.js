import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import EditStudent from '../edit-student';
import Header from '../header';
import NewStudent from '../new-student';
import { RoleContext, ROLES } from '../role';
import Students from '../students';

class AppContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      role: ROLES.STUDENT,
      changeRole: this.handleRoleChange,
    }
  }

  handleRoleChange = (role) => this.setState({ role });

  render() {
    return (
      <RoleContext.Provider value={this.state}>
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
      </RoleContext.Provider>
    );
  }
}

export default AppContainer;
