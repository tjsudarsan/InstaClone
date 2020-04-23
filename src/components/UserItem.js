import React from 'react';
import PropTypes from 'prop-types';

import dpPlaceholder from '../assets/profile-placeholder.jpg';

const UserItem = (props) => (
  <div role="presentation" onClick={props.onClick} className={`user-card ${props.enableHover ? 'hover' : ''}`}>
    <div className="dp-image-wrapper">
      <img className="dp-image" src={dpPlaceholder} alt="" />
    </div>
    <div className="info">
      <h5>tjsudarsan</h5>
      <p>Sudarsan</p>
    </div>
    {props.actionBtns && (
      <div className="action-btns">
        {props.actionBtns}
      </div>
    )}
  </div>
);

UserItem.defaultProps = {
  onClick: () => {},
  actionBtns: null,
  enableHover: false,
};

UserItem.propTypes = {
  onClick: PropTypes.func,
  actionBtns: PropTypes.any,
  enableHover: PropTypes.bool,
};

export default UserItem;
