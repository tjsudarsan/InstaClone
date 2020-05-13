import { profileActions } from '../actionTypes';

const initialState = {
  loading: false,
  userDetails: null,
  error: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case profileActions.PROFILE_FETCH_START:
      return { ...state, loading: true };
    case profileActions.PROFILE_FETCH_SUCCESS:
      return { ...state, loading: false, userDetails: actions.payload };
    case profileActions.PROFILE_FETCH_FAILED:
      return { ...state, loading: false, error: actions.payload };
    case profileActions.PROFILE_CLEAR:
      return initialState;
    default: return state;
  }
};
