import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({
        inputValue: this.props.defaultValue,
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      inputValue: value,
    }, () => {
      this.props.onChange(value, name, event);
    });
  }

  render() {
    const {
      id, className, name, placeholder, onChange, onBlur, value, disabled, onKeyDown,
    } = this.props;
    return (
      <textarea
        id={id}
        ref={this.props.forwardRef}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={(event) => {
          if (typeof value !== 'undefined') {
            onChange(event.target.value, event.target.name, event);
          } else {
            this.handleChange(event);
          }
        }}
        onBlur={onBlur}
        value={value || this.state.inputValue}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    );
  }
}

TextArea.defaultProps = {
  id: undefined,
  name: undefined,
  className: 'form-control',
  placeholder: undefined,
  onChange: () => {},
  onBlur: () => {},
  defaultValue: undefined,
  value: undefined,
  disabled: false,
  forwardRef: undefined,
  onKeyDown: undefined,
};

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  forwardRef: PropTypes.any,
  onKeyDown: PropTypes.func,
};

export default React.forwardRef((props, ref) => <TextArea {...props} forwardRef={ref} />);
