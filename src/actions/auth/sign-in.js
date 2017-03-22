import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import authTypes from './types';

export const signIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: authTypes.SIGN_IN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(signInSucess(user));
        Actions.main();
      })
      .catch(error => dispatch(signInError(error)));
  };
};

const signInSucess = (user) => {
  return {
    type: authTypes.SIGN_IN_SUCESS,
    payload: user
  };
};

const signInError = (error) => {
  return {
    type: authTypes.SIGN_IN_ERROR,
    payload: error
  };
};

export const autoSignIn = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.AUTO_SIGN_IN });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(autoSignInSuccess(user));
        Actions.main();
      }
      else {
        dispatch(autoSignInFail());
      }
    });
  };
};

const autoSignInSuccess = (user) => {
  return {
    type: authTypes.AUTO_SIGN_IN_SUCESS,
    payload: user
  };
};

const autoSignInFail = (message) => {
  return {
    type: authTypes.AUTO_SIGN_IN_FAIL
  };
};