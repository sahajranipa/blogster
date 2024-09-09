import React from "react";
import { useForm } from "react-hook-form";

const Input = ({
  name,
  placeholder,
  className,
  type,
  value,
  onChange,
  ...rest
}) => {
  return (
    <input
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
