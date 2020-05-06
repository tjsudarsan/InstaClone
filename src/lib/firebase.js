import * as firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJqx0eOuvF3nUUWeAr7iQDMs4ytVR0vvw',
  authDomain: 'instagram-c636e.firebaseapp.com',
  databaseURL: 'https://instagram-c636e.firebaseio.com',
  projectId: 'instagram-c636e',
  storageBucket: 'instagram-c636e.appspot.com',
  messagingSenderId: '257786444973',
  appId: '1:257786444973:web:b79c9c73c75f88c3eada24',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const credentails = firebase.auth.EmailAuthProvider.credential;

export {
  auth,
  credentails,
};
