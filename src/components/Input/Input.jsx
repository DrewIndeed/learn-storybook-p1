import React from "react";
import "./input.css";

const Input = ({ size = "medium", ...rest }) => {
  return <input className={`input ${size}`} {...rest} />;
};

export default Input;
