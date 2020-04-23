import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import UserItem from '../UserItem';

import Button from '../Button';

const FollowRequests = (props) => (
  <div className="follow-requests">
    <h5 className="mb-3">Follow Requests</h5>
    <div className="row align-items-center">
      {new Array(2).fill(null).map((requestItem) => (
        <div className="col-12 col-md-6 request-item">
          <UserItem
            onClick={() => props.history.push('/tjsudarsan')}
            actionBtns={(
              <div className="d-flex align-items-center">
                <Button className="btn btn-sm btn-outline-primary">Accept</Button>
                <i
                  role="presentation"
                  onClick={() => {
                    // Call the server
                  }}
                  className="fas fa-times ml-3 text-secondary"
                />
              </div>
            )}
          />
        </div>
      ))}
    </div>
    <hr />
  </div>
);

FollowRequests.defaultProps = {

};

FollowRequests.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(FollowRequests);
