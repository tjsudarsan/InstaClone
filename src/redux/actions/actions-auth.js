export const validateAuth = () => (dispatch) => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  // Server Call to Validate the loggedin token
  // ~1.5s
  // Service call to server
  dispatch({
    type: 'UPDATE_LOGIN_STATUS',
    payload: isLoggedIn === 'true',
  });
};
