import React from "react";

const Button = ({ text, className, type, variant, ...props }) => {
  return (
    <button type={type} variant={variant} className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;
