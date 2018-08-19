import React from 'react';

import RoleContext from './context';

const withRole = (WrappedComponent) => {
  const WithRole = (props) => (
    <RoleContext.Consumer>
      {({ role }) => (
        <WrappedComponent role={role} {...props} />
      )}
    </RoleContext.Consumer>
  );

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithRole.displayName = `WithRole(${displayName})`;

  return WithRole;
};

export default withRole;
