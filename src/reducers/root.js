import { combineReducers } from 'redux';
import info from './application/info';

export default combineReducers({
  application: info
});