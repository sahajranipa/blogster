import React from "react";
import { useForm } from "react-hook-form";

const Input = ({
  name,
  placeholder,
  className,
  type,
  value,
  onChange,
  register,
  ...rest
}) => {
  const { register } = useForm();
  return (
    <input
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...register(name)}
      {...rest}
    />
  );
};

export default Input;
