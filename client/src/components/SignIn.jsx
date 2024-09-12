import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignInSchema } from "../schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignIn = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="mt-3 mb-3 mx-auto max-w-xl space-y-3 border
 border-gray-300 p-8 rounded-md shadow-lg "
      onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        <h1 className="text-4xl font-bold my-1 font-headingFont">Sign In</h1>
        <p className="text-gray-500 text-xl text-center font-headingFont">
          Sign-In to Access All the Features and Posts.
        </p>
      </div>

      <label className="block mb-2" htmlFor="email">
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
      <span className="mt-3 text-sm font-semibold text-black text-underline font-headingFont">
        <Link to="/forgot-password">Forgot Password?</Link>
      </span>

      <div className="flex flex-col gap-2">
        <Button
          className="w-full border border-gray-400 font-headingFont font-medium rounded-lg py-2 mt-4"
          variant="outline">
          Cancel{" "}
        </Button>
        <Button
          type="submit"
          className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Sign In
        </Button>
      </div>
      <div className="text-center text-gray-500 font-headingFont">
        Don't have an account? {""}
        <Link className="text-black font-medium" to="/sign-up">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
