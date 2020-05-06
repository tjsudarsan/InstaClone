import { authActionTypes } from '../actionTypes';
import { auth } from '../../lib/firebase';

export const validateAuthStatus = () => async (dispatch) => {
  dispatch({
    type: authActionTypes.TOGGLE_LOADING,
    payload: true,
  });
  auth.onAuthStateChanged((userData) => {
    if (userData) {
      dispatch({
        type: authActionTypes.SET_AUTH_STATUS,
        payload: userData,
      });
    } else {
      dispatch({
        type: authActionTypes.SET_AUTH_STATUS,
        payload: null,
      });
    }
  });
};

export const login = ({ emailId, password }) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.LOGIN_START,
    });
    await auth.signInWithEmailAndPassword(emailId, password);
    dispatch({
      type: authActionTypes.LOGIN_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGIN_FAILED,
      payload: error.code === 'auth/user-not-found' ? 'Invalid Credentials' : error.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.REGISTER_START,
    });
    const {
      emailId, password, name,
    } = formData;
    const result = await auth.createUserWithEmailAndPassword(emailId, password);
    result.user.updateProfile({
      displayName: name,
    });
    result.user.sendEmailVerification();
    dispatch({
      type: authActionTypes.REGISTER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.REGISTER_FAILED,
      payload: error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: authActionTypes.LOGOUT,
    });
  });
};

export const sendPassowordResetLink = (emailId) => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.RESET_LINK_SEND_START,
    });
    await auth.sendPasswordResetEmail(emailId);
    dispatch({
      type: authActionTypes.RESET_LINK_SEND_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.RESET_LINK_SEND_FAILED,
      payload: error.code === 'auth/user-not-found' ? 'Email Not Found' : error.message,
    });
  }
};
