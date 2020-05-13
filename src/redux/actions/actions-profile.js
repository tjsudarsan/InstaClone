import { db } from '../../lib/firebase';
import { profileActions } from '../actionTypes';

export const fetchUserDetails = (username) => async (dispatch) => {
  try {
    if (!username) {
      throw new Error('Invalid Link');
    }
    dispatch({
      type: profileActions.PROFILE_FETCH_START,
    });

    const details = await db
      .collection('users')
      .where('username', '==', username.toLowerCase())
      .get()
      .then((snapShot) => {
        if (snapShot.docs.length) {
          const user = snapShot.docs.pop();
          return {
            uid: user.id,
            ...user.data(),
          };
        }

        return null;
      });

    if (!details) {
      throw new Error('User not found!');
    }

    dispatch({
      type: profileActions.PROFILE_FETCH_SUCCESS,
      payload: details,
    });
  } catch (error) {
    dispatch({
      type: profileActions.PROFILE_FETCH_FAILED,
      payload: error.message,
    });
  }
};

export const clearData = () => (dispatch) => dispatch({
  type: profileActions.PROFILE_CLEAR,
});
