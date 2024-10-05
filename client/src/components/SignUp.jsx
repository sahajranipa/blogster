import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignUpSchema } from "../schemas/signUpSchema";

const SignUp = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="m-auto md:mx-auto mt-3 mb-3 w-full lg:max-w-xl sm:p-8 space-y-3 border
     border-gray-300 p-8 rounded-md shadow-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        <h1 className="text-4xl font-bold my-1 font-headingFont">Sign Up</h1>
        <p className="text-gray-500 text-xl text-center font-headingFont">
          Create Account to get started
        </p>
      </div>
      <label className="block my-2" htmlFor="fullName">
        Full Name
      </label>
      <div className="flex flex-col space-y-2 font-headingFont">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("fullName")}
          name="fullName"
          type="text"
          placeholder="John Doe"
        />
      </div>
      {errors?.fullName?.message && (
        <p className="text-red-700 text-sm mb-4">{errors.fullName.message}</p>
      )}
      <label className="block my-2" htmlFor="email">
        Email
      </label>
      <div className="flex flex-col space-y-2">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("email")}
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
        />
      </div>
      {errors?.email?.message && (
        <p className="text-red-700 text-sm mb-4">{errors.email.message}</p>
      )}
      <label className="block mb-2" htmlFor="password">
        Password
      </label>
      <div className="relative">
        <Input
          className="relative border p-2 rounded-md border-gray-300 w-full"
          {...register("password")}
          placeholder={"***********"}
          name="password"
          type={togglePassword ? "password" : "text"}
        />
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
      {errors?.password?.message && (
        <p className="text-red-700 text-sm mb-4">{errors.password.message}</p>
      )}
      <label className="block mb-2" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <div className="relative">
        <Input
          className=" relative border p-2 rounded-md border-gray-300 w-full"
          {...register("confirmPassword")}
          placeholder={"***********"}
          name="confirmPassword"
          type={toggleConfirmPassword ? "password" : "text"}
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
      {errors?.confirmPassword?.message && (
        <p className="text-red-700 text-sm mb-4">
          {errors.confirmPassword.message}
        </p>
      )}
      <div className="flex flex-col gap-2">
        <Button
          className="w-full border border-gray-400 font-headingFont font-medium rounded-lg mt-4 py-2"
          variant="outline">
          Cancel{" "}
        </Button>
        <Button
          type="submit"
          className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Sign Up
        </Button>
      </div>
      <div className="text-center text-gray-500 font-headingFont">
        Already have an account?{" "}
        <Link className="text-black font-medium" to="/sign-in">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
