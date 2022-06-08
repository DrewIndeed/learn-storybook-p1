import PropTypes from "prop-types";
import React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
const Button = ({ variant, label, ...props }) => {
  return (
    <button type="button" className={`button ${variant}`} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  label: "primary",
};

export default Button;
