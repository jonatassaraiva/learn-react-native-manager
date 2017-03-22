import { actionTypes } from '../../actions/auth';

const INITIAL_STATE = {
  action: actionTypes.INITIAL_SATE,
  message: 'Initial state.',
  execution: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTO_SIGN_IN:
      return {
        ...state,
        action: actionTypes.AUTO_SIGN_IN,
        message: 'Auto sign in.',
        execution: true,
        error: null
      };
    case actionTypes.AUTO_SIGN_IN_SUCESS:
      return {
        ...state,
        action: actionTypes.AUTO_SIGN_IN_SUCESS,
        message: 'Auto Sign in sucess.',
        execution: false,
        error: null
      };
    case actionTypes.AUTO_SIGN_IN_FAIL:
      return {
        ...state,
        action: actionTypes.AUTO_SIGN_IN_FAIL,
        message: 'Auto sign in fail.',
        execution: false,
        error: null
      };

    case actionTypes.PROP_CHANGE:
      return {
        ...state,
        action: actionTypes.PROP_CHANGE,
        message: 'Prop change.',
        execution: false,
        error: null
      };

    case actionTypes.SIGN_IN:
      return {
        ...state,
        action: actionTypes.SIGN_IN,
        message: 'Sign in.',
        execution: true,
        error: null
      };
    case actionTypes.SIGN_IN_SUCESS:
      return {
        ...state,
        action: actionTypes.SIGN_IN_SUCESS,
        message: 'Sign in sucess.',
        execution: false,
        error: null
      };
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        action: actionTypes.SIGN_IN_ERROR,
        execution: false,
        error: action.payload
      };

    case actionTypes.SIGN_OUT:
      return {
        ...state,
        action: actionTypes.SIGN_OUT,
        message: 'Sign out.',
        execution: false,
        error: action.payload
      };
    case actionTypes.SIGN_OUT_SUCESS:
      return {
        ...state,
        action: actionTypes.SIGN_OUT_SUCESS,
        message: 'Sign out sucess.',
        execution: false,
        error: null
      };
    case actionTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        action: actionTypes.SIGN_OUT_ERROR,
        message: 'Sign out faild.',
        execution: false,
        error: action.payload
      };

    default:
      return state;
  }
};