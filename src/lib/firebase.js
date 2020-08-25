import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const credentails = firebase.auth.EmailAuthProvider.credential;
const db = firebase.firestore();
const storage = firebase.storage();

export {
  auth,
  credentails,
  db,
  storage,
  firebase as default,
};
