import { authActionTypes } from '../actionTypes';

const initialState = {
  loading: true,
  formLoading: false,
  formError: null,
  userData: null,
  successMessage: null,
};

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case authActionTypes.SET_AUTH_STATUS:
      return { ...state, loading: false, userData: actions.payload };
    case authActionTypes.TOGGLE_LOADING:
      return { ...state, loading: actions.payload };

    // Login Actions
    case authActionTypes.LOGIN_START:
      return {
        ...state, formLoading: true, formError: null, successMessage: null,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return { ...state, formLoading: false };
    case authActionTypes.LOGIN_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };

    // Register actions
    case authActionTypes.REGISTER_START:
      return {
        ...state, formLoading: true, formError: null, successMessage: null,
      };
    case authActionTypes.REGISTER_SUCCESS:
      return { ...state, formLoading: false };
    case authActionTypes.REGISTER_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };

    // Reset Link Actions
    case authActionTypes.RESET_LINK_SEND_START:
      return {
        ...state, formLoading: true, formError: null, successMessage: null,
      };
    case authActionTypes.RESET_LINK_SEND_SUCCESS:
      return { ...state, formLoading: false, successMessage: 'Reset link sent to your email!' };
    case authActionTypes.RESET_LINK_SEND_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };
    case authActionTypes.RESET_PASSWORD_START:
      return {
        ...state, formLoading: true, formError: null, successMessage: null,
      };
    case authActionTypes.RESET_PASSWORD_SUCCESS:
      return { ...state, formLoading: false, successMessage: 'Password Reset Successfully. The page will be redirected shortly!' };
    case authActionTypes.RESET_PASSWORD_FAILED:
      return { ...state, formLoading: false, formError: actions.payload };


    // Logout action
    case authActionTypes.LOGOUT:
      return initialState;
    default: return state;
  }
};

export default authReducer;
