import employTypes from './types';

export const propChange = ({ prop, value }) => {
  return {
    type: employTypes.PROP_CHANGE,
    payload: { prop, value }
  };
};