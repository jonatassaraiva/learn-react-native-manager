import { combineReducers } from 'redux';
import status from './action';
import create from './create';

export default combineReducers({
  status,
  create
});