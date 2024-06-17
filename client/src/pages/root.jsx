import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
