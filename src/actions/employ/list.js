import firebase from 'firebase';
import actionTypes from './types';

export const listFetch = () => {

  return (dispatch) => {
    const { currentUser } = firebase.auth();

    dispatch({ type: actionTypes.FETCH });
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: actionTypes.FETCH_SUCESS, payload: snapshot.val() });
      });
  };
};