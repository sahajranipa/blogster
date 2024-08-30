import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Header = () => {
  return (
    <header className="w-full border border-bottom-gray-600 rounded-full">
      <div className="flex justify-between items-center py-3 px-3">
        <div>
          <Link to="/">
            <h2 className="text-3xl font-headingFont font-bold">Blogster.</h2>
          </Link>
        </div>
        <div>
          <Button
            className="text-black bg-white hover:bg-black  hover:text-white  
              focus:outline-none border border-black
               font-headingFont 
               font-medium  rounded-lg text-sm px-5 
              py-2.5 text-center inline-flex items-center me-2 mb-2"
            size="lg">
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button
            className="text-black bg-white hover:bg-black 
               hover:text-white 
              focus:outline-none border border-black
               font-headingFont 
               font-medium rounded-lg text-sm 
              px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            size="lg">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
