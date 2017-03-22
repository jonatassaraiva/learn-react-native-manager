import authTypes from './types';

export const propChange = ({ prop, value }) => {
  return {
    type: authTypes.PROP_CHANGE,
    payload: { prop, value }
  };
};