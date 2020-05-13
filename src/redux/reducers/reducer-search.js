import { searchActions } from '../actionTypes';

const initialState = {
  loading: false,
  error: null,
  searchList: [],
};

const searchReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case searchActions.SEARCH_START:
      return { ...state, loading: true, error: null };
    case searchActions.SEARCH_SUCCESS:
      return { ...state, loading: false, searchList: actions.payload };
    case searchActions.SEARCH_FAILED:
      return { ...state, loading: false, error: 'Something Went Wrong!' };
    default: return state;
  }
};

export default searchReducer;
