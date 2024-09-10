import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="mt-[5rem] mb-3 mx-auto my-auto max-w-xl space-y-3 border
     border-gray-300 p-8 rounded-md shadow-lg"
      onClick={handleSubmit(onSubmit)}>
      <p className="text-3xl text-center font-bold my-1 font-headingFont">
        Reset Your Password
      </p>
      <label className="block mb-2" htmlFor="password">
        Password
      </label>
      <div className="flex flex-col space-y-2 font-headingFont">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("password")}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <label className="block mb-2" htmlFor="confirm_password">
        Confirm Password
      </label>
      <div className="flex flex-col space-y-2 font-headingFont">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("confirm_password")}
          name="confirm_password"
          type="password"
          placeholder="Enter your confirm password"
        />
      </div>
      <div className="mt-4">
        <Button className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default ResetPassword;
