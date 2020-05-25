import firebase, { db, auth } from '../../lib/firebase';
import { profileActions } from '../actionTypes';

export const fetchUserDetails = (username) => async (dispatch) => {
  try {
    if (!username) {
      throw new Error('Invalid Link');
    }

    dispatch({
      type: profileActions.PROFILE_FETCH_START,
    });

    await db
      .collection('users')
      .where('username', '==', username.toLowerCase())
      .onSnapshot(async (snapShot) => {
        if (snapShot.docs.length) {
          const user = snapShot.docs.pop();

          const details = {
            uid: user.id,
            ...user.data(),
          };

          let followBtnText = 'Follow';
          let isFollowRequested = false;

          if (details.followers.includes(auth.currentUser.uid)) {
            followBtnText = 'Unfollow';
          } else if (details.isPrivate) {
            await db.collection('notifications').doc(`${auth.currentUser.uid}${details.uid}`).get().then((doc) => {
              if (doc.exists) {
                followBtnText = 'Cancel Request';
                isFollowRequested = true;
              } else {
                followBtnText = 'Request Follow';
              }
            });
          }
          dispatch({
            type: profileActions.PROFILE_FETCH_SUCCESS,
            payload: {
              ...details,
              followBtnText,
              isFollowRequested,
            },
          });
        } else {
          dispatch({
            type: profileActions.PROFILE_FETCH_FAILED,
            payload: 'User not found!',
          });
        }
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

export const followAction = () => async (dispatch, getState) => {
  try {
    const { userData: authUserData } = getState().auth;
    const { userDetails: profileUserData } = getState().profile;

    const isFollowing = profileUserData.followers.includes(authUserData.uid);

    if (isFollowing) {
      await db.collection('users').doc(profileUserData.uid).update({
        followers: firebase.firestore.FieldValue.arrayRemove(authUserData.uid),
      });
      await db.collection('users').doc(authUserData.uid).update({
        following: firebase.firestore.FieldValue.arrayRemove(profileUserData.uid),
      });
    } else if (profileUserData.isPrivate) {
      if (profileUserData.isFollowRequested) {
        await db.collection('notifications').doc(`${authUserData.uid}${profileUserData.uid}`).delete();
      } else {
        await db.collection('notifications').doc(`${authUserData.uid}${profileUserData.uid}`).set({
          type: 'FOLLOW_REQUEST', // LIKES or COMMENT or FOLLOW_REQUEST
          timeStamp: new Date().toISOString(),
          requestedBy: authUserData.uid,
          requestedTo: profileUserData.uid,
        });
      }
      db.collection('users').doc(profileUserData.uid).update({
        timeStamp: new Date().toISOString(),
      });
    } else {
      await db.collection('users').doc(profileUserData.uid).update({
        followers: firebase.firestore.FieldValue.arrayUnion(authUserData.uid),
      });
      await db.collection('users').doc(authUserData.uid).update({
        following: firebase.firestore.FieldValue.arrayUnion(profileUserData.uid),
      });
    }
  } catch (error) {
    alert('Something Went Wrong!');
  }
};
