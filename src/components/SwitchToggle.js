import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SwitchToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  componentDidMount() {
    if (this.props.defaultChecked) {
      this.setState({
        checked: this.props.defaultChecked,
      });
    }
  }

  handleChange = (event) => {
    const { name, checked } = event.target;
    this.setState({
      checked,
    }, () => {
      this.props.onChange(checked, name, event);
    });
  }

  render() {
    const {
      id, className, name, onChange, checked, disabled, label,
    } = this.props;
    return (
      <div className="custom-control custom-switch">
        <input
          id={id || label}
          ref={this.props.forwardRef}
          type="checkbox"
          name={name}
          className={`custom-control-input ${className}`}
          onChange={(event) => {
            if (typeof checked !== 'undefined') {
              onChange(event.target.checked, event.target.name, event);
            } else {
              this.handleChange(event);
            }
          }}
          checked={checked || this.state.checked}
          disabled={disabled}
        />
        <label className="custom-control-label" htmlFor={id || label}>{label}</label>
      </div>
    );
  }
}

SwitchToggle.defaultProps = {
  id: undefined,
  name: undefined,
  className: '',
  onChange: () => {},
  defaultChecked: undefined,
  checked: undefined,
  disabled: false,
  forwardRef: undefined,
};

SwitchToggle.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  label: PropTypes.string.isRequired,
};

export default React.forwardRef((props, ref) => <SwitchToggle {...props} forwardRef={ref} />);
