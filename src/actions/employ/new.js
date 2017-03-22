import employTypes from './types';

export const newEntity = () => {
  return (dispatch) => {
    dispatch({
      type: employTypes.NEW
    });
  };
};