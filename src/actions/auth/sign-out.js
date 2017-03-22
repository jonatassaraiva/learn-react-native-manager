import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import authTypes from './types';

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.SIGN_OUT });

    firebase.auth().signOut()
      .then(() => {
        dispatch(signOutSucess());
        Actions.auth();
      })
      .catch(error => dispatch(signOutError(error)));
  };
};

const signOutSucess = (user) => {
  return {
    type: authTypes.SIGN_OUT_SUCESS
  };
};

const signOutError = (error) => {
  return {
    type: authTypes.SIGN_OUT_ERROR,
    payload: error
  };
};