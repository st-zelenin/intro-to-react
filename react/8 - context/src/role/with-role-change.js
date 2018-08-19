import React from 'react';

import RoleContext from './context';

const withRoleChange = (WrappedComponent) => {
  const WithRoleChange = (props) => (
    <RoleContext.Consumer>
      {({ role, changeRole }) => (
        <WrappedComponent role={role} changeRole={changeRole} {...props} />
      )}
    </RoleContext.Consumer>
  );

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithRoleChange.displayName = `WithRoleChange(${displayName})`;

  return WithRoleChange;
};

export default withRoleChange;
