import { combineReducers } from 'redux';
import { reducer as toastReducer } from 'react-redux-toastr';

export const appReducer = combineReducers({
  toastr: toastReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USERS_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
