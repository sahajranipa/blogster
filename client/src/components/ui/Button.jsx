import React from "react";

const Button = ({ children, className, type, variant, ...props }) => {
  return (
    <button type={type} variant={variant} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
