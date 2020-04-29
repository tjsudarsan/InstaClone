import { authActionTypes } from '../actionTypes';

const sleep = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

export const validateAuthStatus = () => async (dispatch) => {
  dispatch({
    type: authActionTypes.TOGGLE_LOADING,
    payload: true,
  });
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // API call
  await sleep(1);
  dispatch({
    type: authActionTypes.SET_AUTH_STATUS,
    payload: isLoggedIn === 'true',
  });
};
