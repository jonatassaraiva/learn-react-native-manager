import { applicationTypes } from '../../actions/application';

const initialState = {
  version: '',
  name: ''
};

export default function info(state = initialState, action) {
  switch (action.type) {
    case applicationTypes.LOAD_PACKGE_INFO: {
      const { version, name } = action.payload;
      return { ...state, version, name };
    }
    default:
      return state;
  }
}