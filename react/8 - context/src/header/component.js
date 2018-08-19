import React, { Fragment } from 'react';

import { ROLES, withRoleChange } from '../role';

const HeaderComponent = ({ routes, onRouteClick, role, changeRole }) => (
  <Fragment>
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
    <div>
      select role:
      <div>
        <input type="radio" id={ROLES.STUDENT} name="student" checked={role === ROLES.STUDENT} onChange={() => changeRole(ROLES.STUDENT)} />
        <label htmlFor={ROLES.STUDENT}>student</label>
      </div>
      <div>
        <input type="radio" id={ROLES.CURATOR} name="curator" checked={role === ROLES.CURATOR} onChange={() => changeRole(ROLES.CURATOR)} />
        <label htmlFor={ROLES.CURATOR}>curator</label>
      </div>
    </div>
  </Fragment>
);

export default withRoleChange(HeaderComponent);
