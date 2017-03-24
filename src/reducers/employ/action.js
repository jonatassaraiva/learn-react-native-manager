import actionTypes from '../../actions/employ/types';

const INITIAL_STATE = { 
  action: actionTypes.INITIAL_SATE,
  message: 'Initial state.',
  execution: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE:
      return { 
        ...state, 
        action: actionTypes.CREATE,
        execution: true,
        error: null
      };
    case actionTypes.CREATE_SUCESS:
      return { 
        ...state, 
        action: actionTypes.CREATE_SUCESS,
        execution: false,
        error: null
      };
    case actionTypes.CREATE_ERROR:
      return { 
        ...state, 
        action: actionTypes.CREATE_ERROR,
        execution: false,
        error: action.payload
      };

    case actionTypes.NEW:
      return { 
        ...state, 
        action: actionTypes.NEW,
        execution: false,
        error: null
      };

    case actionTypes.PROP_CHANGE:
      return { 
        ...state, 
        action: actionTypes.PROP_CHANGE,
        execution: false,
        error: null
      };

    case actionTypes.FETCH:
      return { 
        ...state, 
        action: actionTypes.FETCH,
        execution: true,
        error: null
      };
    case actionTypes.FETCH_SUCESS:
      return { 
        ...state, 
        action: actionTypes.FETCH_SUCESS,
        execution: false,
        error: null
      };
    case actionTypes.FETCH_ERROR:
      return { 
        ...state, 
        action: actionTypes.FETCH_ERROR,
        execution: false,
        error: action.payload
      };

    default:
      return state;
  }
};