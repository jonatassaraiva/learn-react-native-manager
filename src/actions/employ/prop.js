import employTypes from './types';

export const propChange = ({ prop, value }) => {
  return {
    type: employTypes.EMPLOYEE_PROP_CHANGE,
    payload: { prop, value }
  };
};