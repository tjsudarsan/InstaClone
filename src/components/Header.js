import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import DpPlaceholder from '../assets/profile-placeholder.jpg';

import '../styles/Header.scss';

const Header = ({
  location,
}) => (
  <nav className="row navbar sticky-top navbar-expand-lg navbar-dark bg-primary header">
    <div className="container">
      <Link to="/feeds" className="navbar-brand">Instagram</Link>
      <div className="ml-auto menus">
        <Link
          to="/feeds"
          className={`menu-item ${location.pathname === '/feeds' ? 'active' : ''}`}
        >
          <i className="fas fa-home" />
        </Link>
        <Link
          to="/settings"
          className={`menu-item ${location.pathname === '/settings' ? 'active' : ''}`}
        >
          <i className="fas fa-cog" />
        </Link>
        <Link
          to="/search"
          className={`menu-item ${location.pathname === '/search' ? 'active' : ''}`}
        >
          <i className="fas fa-search" />
        </Link>
        <Link
          to="/profile"
          className={`menu-item ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          <img className="dp-image" src={DpPlaceholder} alt="" />
        </Link>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {

};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
