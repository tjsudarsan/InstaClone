import React from 'react';

const Footer = () => (
  <div className="row align-items-center">
    <div className="col text-center">
      <p className="footer-text">
        Connecting people with
        {' '}
        <span className="text-danger">&hearts;</span>
        {' '}
        - Instagram -
        {' '}
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        - All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
