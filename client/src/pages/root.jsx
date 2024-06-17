import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/sign-in">Sign-In</Link>
          <Link to="/sign-up">Sign-Up</Link>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
