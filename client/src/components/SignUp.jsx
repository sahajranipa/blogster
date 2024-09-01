import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const SignUp = () => {
  return (
    <form
      className="mx-auto mt-3 mb-3 h-screen max-w-xl space-y-6 border
     border-gray-300 p-8 rounded-md shadow-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold my-1 font-headingFont">Sign Up</h1>
        <p className="text-gray-500 text-xl text-center font-headingFont">
          Create Account to get started
        </p>
      </div>
      <div className="flex flex-col space-y-2 font-headingFont">
        <label htmlFor="fullName">Full Name</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="fullName"
          type="text"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password">Password</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="password"
          type="password"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="confirmPassword"
          type="password"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          className="w-full border border-gray-400 font-headingFont font-medium rounded-lg py-2"
          variant="outline">
          Cancel{" "}
        </Button>
        <Button
          type="submit"
          className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
