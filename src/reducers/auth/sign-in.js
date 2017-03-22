import { actionTypes } from '../../actions/auth';

const INITIAL_STATE = {
  email: '',
  password: '',
  hasSignIn: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PROP_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };

    case actionTypes.SIGN_IN_SUCESS:
    case actionTypes.AUTO_SIGN_IN_SUCESS:
      return { ...INITIAL_STATE, hasSIGNIn: true };

    case actionTypes.SIGN_OUT_SUCESS:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};