import React from "react";

const Input = React.forwardRef(
  ({ name, placeholder, className, type, value, onChange, ...rest }, ref) => {
    return (
      <input
        name={name}
        ref={ref}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

export default Input;
