import { combineReducers } from 'redux';
import status from './action';
import user from './user';
import signIn from './sign-in';

export default combineReducers({
  status,
  signIn,
  user
});