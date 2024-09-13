import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema } from "../schemas/forgotPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: { forgot_password: "" },
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="mt-[5rem] mx-auto my-auto max-w-xl space-y-3 border
     border-gray-300 p-8 rounded-md shadow-sm"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        <p className="text-gray-500 text-xl text-center font-headingFont">
          Please Enter Your Email
        </p>
      </div>
      <label className="block mb-2" htmlFor="forgot_password">
        Email
      </label>
      <div className="flex flex-col space-y-2 font-headingFont">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("forgot_password")}
          name="forgot_password"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      {errors?.forgot_password?.message && (
        <p className="text-red-700 text-sm mb-4">
          {errors.forgot_password.message}
        </p>
      )}
      <div className="mt-4">
        <Button className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Send To Email
        </Button>
      </div>
    </form>
  );
};

export default ForgotPassword;
