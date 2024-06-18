import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const SignUp = () => {
  return (
    <form
      className="mx-auto h-screen max-w-xl space-y-6 border
     border-gray-300 p-8 rounded-md ">
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
        <label htmlFor="fullName">Email</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="fullName">Password</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="password"
          type="password"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="Password">Confirm Password</label>
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
