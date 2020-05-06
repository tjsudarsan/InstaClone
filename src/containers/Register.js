import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import RegisterForm from '../components/Register/RegisterForm';
import Button from '../components/Button';

// SCSS Style File of Register
import '../styles/Register.scss';

// ActionCreators
import { register } from '../redux/actions/actions-auth';

const Register = (props) => (
  <div className="row align-items-center justify-content-center register-container">
    <div className="d-none d-md-block col-md-8 text-center info-container">
      <h1>Instagram</h1>
    </div>
    <div className="col-12 col-md-4 register-form-container">
      <h1 className="d-block d-md-none text-primary display-4">Instagram</h1>
      <h3>Register</h3>
      <p className="text-center">Start sharing your moments with your loved ones!</p>
      <RegisterForm onSubmit={props.register} />
      <hr className="w-100" />
      <Button
        className="btn btn-sm btn-link"
        onClick={() => props.history.push('/')}
      >
        Already a user? Login
      </Button>
    </div>
  </div>
);

Register.propTypes = {
  history: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dipatch) => ({
  register: (formData) => dipatch(register(formData)),
});

export default connect(null, mapDispatchToProps)(Register);
