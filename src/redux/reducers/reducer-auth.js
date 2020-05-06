import { authActionTypes } from '../actionTypes';

const initialState = {
  loading: false,
  formLoading: false,
  formError: null,
  userData: null,
};

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case authActionTypes.SET_AUTH_STATUS:
      return { ...state, loading: false, userData: actions.payload };
    case authActionTypes.TOGGLE_LOADING:
      return { ...state, loading: actions.payload };

    // Login Actions
    case authActionTypes.LOGIN_START:
      return { ...state, formLoading: true, formError: null };
    case authActionTypes.LOGIN_SUCCESS:
      return { ...state, formLoading: false };
    case authActionTypes.LOGIN_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };

    // Register actions
    case authActionTypes.REGISTER_START:
      return { ...state, formLoading: true, formError: null };
    case authActionTypes.REGISTER_SUCCESS:
      return { ...state, formLoading: false };
    case authActionTypes.REGISTER_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };

    // Reset Link Actions
    case authActionTypes.RESET_LINK_SEND_START:
      return { ...state, formLoading: true, formError: null };
    case authActionTypes.RESET_LINK_SEND_SUCCESS:
      return { ...state, formLoading: false };
    case authActionTypes.RESET_LINK_SEND_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };


    // Logout action
    case authActionTypes.LOGOUT:
      return initialState;
    default: return state;
  }
};

export default authReducer;
