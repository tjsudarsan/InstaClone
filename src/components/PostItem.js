import React from 'react';
import PropTypes from 'prop-types';

import dummyPostImage from '../assets/dummy-post-image.jpg';

const PostItem = (props) => {
  let infoContent = null;

  if (props.notificationType === 'LIKE') {
    infoContent = (
      <>
        <p className="m-0">
          <b>38 likes</b>
          {' '}
          for
          {' '}
          <b>Wonderfull Nature</b>
        </p>
        <p className="text-secondary m-0">tjsudarsan, mevin, tarun</p>
      </>
    );
  } else {
    infoContent = (
      <>
        <p className="m-0">
          <b>mevin</b>
          {' '}
          has commented on your post
          {' '}
          <b>Wonderfull Nature</b>
        </p>
        <p className="text-secondary m-0">Sint Lorem est ex eiusmod nulla exercitation cillum pariatur. Et eu officia irure deserunt exercitation cupidatat laboris eu anim. Cillum non in do dolore qui deserunt laborum velit ex deserunt laborum. Ea ipsum mollit proident aute ex aliqua ipsum sint veniam eu mollit et enim. Incididunt qui non veniam dolore esse exercitation.</p>
      </>
    );
  }

  return (
    <div
      role="presentation"
      onClick={props.onClick}
      className={`post-card ${props.enableHover ? 'hover' : ''}`}
    >
      <div className="info">
        {infoContent}
      </div>
      <div className="post-image-wrapper">
        <img className="post-image" src={dummyPostImage} alt="" />
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  onClick: () => {},
  enableHover: false,
};

PostItem.propTypes = {
  onClick: PropTypes.func,
  enableHover: PropTypes.bool,
  notificationType: PropTypes.oneOf(['LIKE', 'COMMENT']).isRequired,
};

export default PostItem;
