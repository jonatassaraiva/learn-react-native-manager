import firebase from 'firebase';

export const authTypes = {
  EMAIL_CHANGED: 'EMAIL_CHANGED',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAIL: 'LOGIN_USER_FAIL',
  LOGIN_USER: 'LOGIN_USER'
};

export const emailChanged = (text) => {
  return {
    type: authTypes.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: authTypes.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: authTypes.LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: authTypes.LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: authTypes.LOGIN_USER_SUCCESS,
    payload: user
  });
};