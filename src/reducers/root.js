import { combineReducers } from 'redux';
import info from './application/info';
import auth from './auth';
import employ from './employ';

export default combineReducers({
  application: info,
  auth,
  employ
});