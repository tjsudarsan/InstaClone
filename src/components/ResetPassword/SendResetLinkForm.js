import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import InputField from '../InputField';
import Button from '../Button';
import Alert from '../Alert';

class SendResetLinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailId: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailId) {
      this.props.onSubmit({ emailId: this.state.emailId });
    }
  }

  render() {
    return (
      <>
        <Alert show={!!this.props.formError} type="danger" message={this.props.formError} />
        <form className="w-75 text-center" onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <InputField
              type="email"
              className="form-control"
              placeholder="Email Address"
              onChange={(value) => this.setState({ emailId: value })}
            />
            <div className="input-group-append">
              <Button
                className="btn btn-outline-primary"
                type="submit"
                loading={this.props.formLoading}
                loadingText="Sending Link..."
              >
                Send
              </Button>
            </div>
          </div>
          <small className="text-muted">An reset password link will be sent to this email!</small>
        </form>
      </>
    );
  }
}

SendResetLinkForm.defaultProps = {
  formLoading: false,
  formError: null,
};

SendResetLinkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formLoading: PropTypes.bool,
  formError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  formLoading: state.auth.formLoading,
  formError: state.auth.formError,
});

export default connect(mapStateToProps)(SendResetLinkForm);
