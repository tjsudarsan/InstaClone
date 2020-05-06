import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  if (props.show) {
    return (
      <div className={`alert alert-${props.type}`} role="alert">
        {props.message}
      </div>
    );
  }

  return null;
};

Alert.defaultProps = {
  show: false,
  message: null,
  type: 'primary',
};

Alert.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
};

export default Alert;
