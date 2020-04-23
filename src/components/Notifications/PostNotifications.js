import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PostItem from '../PostItem';

const PostNotifications = (props) => (
  <div className="post-notifications">
    <h5 className="mb-3">Updates on Posts</h5>
    <div className="row align-items-center">
      {new Array(10).fill(null).map((postItem, index) => (
        <div className="col-12 col-md-6 post-item">
          <PostItem enableHover notificationType={index % 3 === 0 ? 'LIKE' : 'COMMENT'} />
        </div>
      ))}
    </div>
  </div>
);

export default withRouter(PostNotifications);
