import React from "react";
import { Link } from "react-router-dom";
import Image from "./ui/Image";

const NavDropDown = () => {
  return (
    <div
      id="dropdownAvatar"
      className="md:hidden absolute top-[4.7rem] z-10 w-full bg-white text-black rounded-lg shadow  dark:bg-black dark:text-white dark:divide-gray-600 p-3">
      <div className="flex items-center gap-8 px-4 py-3 text-sm text-gray-900 dark:text-white">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          className=" relative rounded-full w-10 h-10 object-cover aspect-square"
          alt="profile pic"
        />

        <div>
          <div>Bonnie Green</div>
          <div className="text-lg md:text-sm truncate">name@flowbite.com</div>
        </div>
      </div>
      <ul
        className="px-auto text-lg md:text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            My Blog Posts
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            My Saved Posts
          </Link>
        </li>
      </ul>
      <hr className="mt-2" />
      <div className="py-2">
        <Link
          href="#"
          className="block px-4 py-2 text-lg md:text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default NavDropDown;
