import firebase from 'firebase';

import actionTypes from './types';

export const create = ({ name, phone, shift }) => {
  return (dispatch) => {
    dispatch(creating());
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch(createdSucess());
      });
  };
};

const creating = () => {
  return { 
    type: actionTypes.CREATE
  };
};

const createdSucess = () => {
  return {
    type: actionTypes.CREATE_SUCESS
  };
};