import { authActionTypes } from '../actionTypes';

const initialState = {
  loading: false,
  isLoggedIn: false,
};

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case authActionTypes.SET_AUTH_STATUS:
      return { ...state, isLoggedIn: actions.payload, loading: false };
    case authActionTypes.TOGGLE_LOADING:
      return { ...state, loading: actions.payload };
    default: return state;
  }
};

export default authReducer;
