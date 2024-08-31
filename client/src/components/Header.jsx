import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mt-2 mx-auto bg-white  w-[90%] px-4 py-2 rounded-full drop-shadow-xl">
      <div className="flex justify-between items-center py-3 px-3">
        <div>
          <Link to="/">
            <h2 className="text-3xl font-headingFont font-bold">Blogster.</h2>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="text-black 
              focus:outline-none border
               border-black  hover:bg-black hover:text-white
               font-headingFont 
               font-medium  rounded-full text-sm px-5 
              py-2.5 text-center inline-flex items-center"
            size="lg">
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button
            className="text-black
              focus:outline-none border border-black hover:bg-black hover:text-white
               font-headingFont 
               font-medium  rounded-full text-sm px-5 
              py-2.5 text-center inline-flex items-center"
            size="lg">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
