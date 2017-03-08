import packageInfo from '../../../package.json';

export const applicationTypes = {
  LOAD_PACKGE_INFO: 'LOAD_PACKGE_INFO'
};

export const loadPacageInfo = () => (dispatch) => {
  return dispatch(load(packageInfo));
};

const load = payload => ({
  type: applicationTypes.LOAD_PACKGE_INFO,
  payload
});