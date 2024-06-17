import React from "react";

const Input = ({ name, placeholder, className, type, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
