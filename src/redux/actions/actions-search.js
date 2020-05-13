import { searchActions } from '../actionTypes';
import { db, auth } from '../../lib/firebase';

export const searchUsers = (searchText) => async (dispatch) => {
  try {
    dispatch({
      type: searchActions.SEARCH_START,
    });
    const list = await db
      .collection('users')
      .where('username', '>=', searchText)
      .get()
      .then((snapshot) => {
        const users = [];
        snapshot.forEach((item) => {
          if (item.id === auth.currentUser.uid) {
            return;
          }

          const { profilePic, username, bio } = item.data();
          users.push({
            uid: item.id,
            profilePic,
            username,
            bio,
          });
        });
        return users;
      });

    dispatch({
      type: searchActions.SEARCH_SUCCESS,
      payload: list,
    });
  } catch (error) {
    dispatch({
      type: searchActions.SEARCH_FAILED,
      payload: error.message,
    });
  }
};
