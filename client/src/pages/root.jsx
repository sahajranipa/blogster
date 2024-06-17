import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Root = () => {
  return (
    <>
      <header className="w-full h-30 p-6 border border-bottom-gray-600">
        <nav className="flex space-x-4 justify-around">
          <h2 className="justify-start text-2xl font-bold">
            <Link to="/">Blogster</Link>
          </h2>

          <div className="flex justify-end space-x-10">
            <Button variant="outine">
              <Link to="/sign-in">Sign-In</Link>
            </Button>
            <Button>
              <Link to="/sign-up">Sign-Up</Link>
            </Button>
          </div>
        </nav>
      </header>
      <div id="detail" className="my-5">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
