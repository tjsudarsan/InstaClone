/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const btnText = (props.loading && props.loadingText) || props.children;
  return (
    <button
      id={props.id}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      disabled={props.loading || props.disabled}
      title={btnText}
    >
      {btnText}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  className: 'btn btn-sm btn-primary',
  type: 'button',
  onClick: () => {},
  disabled: false,
  loading: false,
  loadingText: null,
  id: undefined,
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  id: PropTypes.string,
};

export default Button;
