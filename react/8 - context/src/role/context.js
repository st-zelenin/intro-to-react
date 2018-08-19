import { createContext } from 'react';

import { ROLES } from './constants';

const RoleContext = createContext({
  role: ROLES.STUDENT,
  changeRole: () => { },
});

export default RoleContext;

