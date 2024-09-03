import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

const ForgotPassword = () => {
  return (
    <form
      className="mt-[7rem] mx-auto my-auto max-w-xl space-y-6 border
     border-gray-300 p-8 rounded-md shadow-sm">
      <div className="text-center">
        <p className="text-gray-500 text-xl text-center font-headingFont">
          Please Enter Your Email
        </p>
      </div>
      <div className="flex flex-col space-y-2 font-headingFont">
        <label htmlFor="forgot_password">Email</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="forgot_password"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <Button className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
        Send To Email
      </Button>
    </form>
  );
};

export default ForgotPassword;
