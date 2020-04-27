const defaultState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  token: null,
  userData: null,
};

const authReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'UPDATE_LOGIN_STATUS':
      return {
        ...state,
        isLoggedIn: actions.payload,
      };
    default: return state;
  }
};

export default authReducer;
