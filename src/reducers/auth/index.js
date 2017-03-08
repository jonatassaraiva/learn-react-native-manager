import { authTypes } from '../../actions/auth';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case authTypes.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case authTypes.LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case authTypes.LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case authTypes.LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};