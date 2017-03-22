import { actionTypes } from '../../actions/auth';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTO_SIGN_IN_SUCESS:
    case actionTypes.SIGN_IN_SUCESS: {
      return action.payload;
    }
    case actionTypes.SIGN_OUT_SUCESS:
    case actionTypes.AUTO_SIGN_IN_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};