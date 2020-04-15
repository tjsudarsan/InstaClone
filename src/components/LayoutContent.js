import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const LayoutContent = (props) => (
  <>
    <Header />
    <div className="container layout-content">
      {props.children}
    </div>
    <Footer />
  </>
);

LayoutContent.defaultProps = {
  children: null,
};

LayoutContent.propTypes = {
  children: PropTypes.any,
};

export default LayoutContent;
