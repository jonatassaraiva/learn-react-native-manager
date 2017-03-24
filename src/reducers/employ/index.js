import { combineReducers } from 'redux';
import status from './action';
import create from './create';
import list from './list';

export default combineReducers({
  status,
  create,
  list
});