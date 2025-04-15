import React from 'react';
import PropTypes from 'prop-types';

// Change: Added default parameters in the function signature
const Button = ({ children, version = 'primary', type = 'button', isDisabled = false }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

// Change: Removed Button.defaultProps, as default parameters are used directly in the function
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
