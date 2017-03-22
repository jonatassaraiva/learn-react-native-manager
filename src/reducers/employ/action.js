import employTypes from '../../actions/employ/types';

const INITIAL_STATE = { 
  action: employTypes.INITIAL_SATE 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case employTypes.NEW:
      return { ...state, action: employTypes.NEW};
    case employTypes.CREATED_SUCESS:
      return { ...state, action: employTypes.CREATED_SUCESS};
    case employTypes.EMPLOYEE_PROP_CHANGE:
      return { ...state, action: employTypes.EMPLOYEE_PROP_CHANGE};
    case employTypes.INITIAL_SATE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};