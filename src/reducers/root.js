import { combineReducers } from 'redux';
import info from './application/info';
import auth from './auth';

export default combineReducers({
  application: info,
  auth
});