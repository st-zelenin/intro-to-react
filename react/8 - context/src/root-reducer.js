import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as list } from './students';
import { reducer as edit } from './edit-student';

const rootReducer = combineReducers({
  form,
  list,
  edit,
});

export default rootReducer;
