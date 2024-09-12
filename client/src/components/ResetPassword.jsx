import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ResetPasswordSchema } from "../schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPassword = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
    resolver: zodResolver(ResetPasswordSchema),
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
      <div className="relative font-headingFont">
        <Input
          className="relative border p-2 rounded-md border-gray-300 w-full"
          {...register("password")}
          name="password"
          type={togglePassword ? "password" : "text"}
          placeholder="Enter your password"
        />
        {errors?.password?.message && (
          <p className="text-red-700 text-sm mb-4">{errors.password.message}</p>
        )}
        <div
          className="absolute inset-y-0 end-0 flex items-center pe-3.5"
          onClick={() => setTogglePassword((prev) => !prev)}>
          {togglePassword ? (
            <FaEye className="w-4 h-4 text-gray-600 dark:text-gray-500" />
          ) : (
            <FaEyeSlash className="w-4 h-4 text-gray-600 dark:text-gray-500" />
          )}
        </div>
      </div>
      <label className="block mb-2" htmlFor="confirm_password">
        Confirm Password
      </label>
      <div className="relative font-headingFont">
        <Input
          className="relative border p-2 rounded-md border-gray-300 w-full"
          {...register("confirm_password")}
          name="confirm_password"
          type={toggleConfirmPassword ? "password" : "text"}
          placeholder="Enter your confirm password"
        />
        <div
          className="absolute inset-y-0 end-0 flex items-center pe-3.5"
          onClick={() => setToggleConfirmPassword((prev) => !prev)}>
          {toggleConfirmPassword ? (
            <FaEye className="w-4 h-4 text-gray-600 dark:text-gray-500" />
          ) : (
            <FaEyeSlash className="w-4 h-4 text-gray-600 dark:text-gray-500" />
          )}
        </div>
      </div>
      {errors?.confirm_password?.message && (
        <p className="text-red-700 text-sm mb-4">
          {errors.confirm_password.message}
        </p>
      )}
      <div className="mt-4">
        <Button className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default ResetPassword;
