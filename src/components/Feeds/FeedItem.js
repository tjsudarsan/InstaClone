import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dpImage from '../../assets/profile-placeholder.jpg';

import InputField from '../InputField';

class FeedItem extends Component {
  constructor(props) {
    super(props);

    this.inputFieldRef = React.createRef();

    this.state = {
      commentMessage: '',
    };
  }

  render() {
    return (
      <>
        <div className="feed-item-wrapper">
          <div className="header">
            <img className="dp-image" src={dpImage} alt="" />
            <h6 className="username">tjsudarsan</h6>
          </div>
          <div className="row post-content">
            <div className="col-12 col-md-6">
              <div className="feed-image-wrapper">
                <img className="feed-image" src="https://via.placeholder.com/1024" alt="post" />
              </div>
              <div className="post-actions">
                <div className="post-action-icon">
                  <i className="far fa-heart" />
                  <span className="likes">&nbsp;2000</span>
                </div>
                <i
                  role="presentation"
                  className="far fa-comment-dots post-action-icon"
                  onClick={() => {
                    this.inputFieldRef.current.focus();
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="comments">
                <div className="media comment-item">
                  <img src="https://via.placeholder.com/64" className="mr-3 userimage" alt="..." />
                  <div className="media-body">
                    <h6 className="mt-0">tjsudarsan</h6>
                    <p className="comment-message">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                  </div>
                </div>
              </div>
              <InputField
                ref={this.inputFieldRef}
                className="form-control"
                placeholder="Add your comment"
                onChange={(value) => this.setState({ commentMessage: value })}
              />
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default FeedItem;
