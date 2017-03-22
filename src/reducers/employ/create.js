import employTypes from '../../actions/employ/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case employTypes.NEW:
      return { ...INITIAL_STATE };
    case employTypes.CREATED_SUCESS: 
      return { ...state };
    case employTypes.EMPLOYEE_PROP_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};