import { actionTypes } from '../../actions/employ';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCESS:
      return action.payload;
    default:
      return state;
  }
};