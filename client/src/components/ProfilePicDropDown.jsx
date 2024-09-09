import React from "react";
import { Link } from "react-router-dom";

const ProfilePicDropDown = ({ toggleDropDown }) => {
  return (
    <div
      className={`absolute ${toggleDropDown ? "" : "hidden"} top-[4.7rem] right-[10.5rem] z-50 my-4 px-2 py-1.5 text-base list-none bg-white text-black divide-y divide-white rounded-lg shadow dark:bg-black dark:text-white dark:divide-gray-600`}
      id="user-dropdown">
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          Sahaj Ranipa
        </span>
        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
          johndoe@gmail.com
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Saved Blog Posts
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Your Blog posts
          </Link>
        </li>
        <li>
          <Link
            to="/sign-in"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePicDropDown;
