import actionsTypes from '../../actions/employ/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.NEW:
      return { ...INITIAL_STATE };
    case actionsTypes.PROP_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};