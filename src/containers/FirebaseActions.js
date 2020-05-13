import React from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../lib/firebase';

const FirebaseActions = () => {
  const params = new URLSearchParams(window.location.search);

  switch (params.get('mode')) {
    case 'resetPassword':
      return <Redirect to={`/reset-password?token=${params.get('oobCode')}`} />;
    case 'verifyEmail':
      auth.applyActionCode(params.get('oobCode')).then(() => {
        alert('Email Verification Successfull');
      }).catch((error) => {
        let errorMessage = null;
        switch (error.code) {
          case 'auth/expired-action-code':
            errorMessage = 'The Link is Expired';
            break;
          case 'auth/invalid-action-code':
            errorMessage = 'The link is already used!';
            break;
          case 'auth/user-disabled':
            errorMessage = 'You account is disabled!';
            break;
          case 'auth/user-not-found':
            errorMessage = 'User not found';
            break;
          default:
            errorMessage = 'Something Went Wrong';
            console.log(error);
        }
        alert(errorMessage);
      });
    default: return <Redirect to="/" />;
  }
};

export default FirebaseActions;
