import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Button from "../components/ui/Button";
import ProfilePicDropDown from "./ProfilePicDropDown";
import Image from "./ui/Image";
import Input from "./ui/Input";
import NavDropDown from "./NavDropDown";

const Header = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleProfilePicDropDown = () => {
    setToggleDropDown((prev) => !prev);
  };
  return (
    <header
      className="sticky top-0 left-0 mx-auto max-w-screen-xl z-50 mt-2 md:mx-auto bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10
 px-4 py-2 rounded-full shadow-xl">
      <div className="flex relative justify-between items-center py-3 px-3">
        <div>
          <Link to="/">
            <h2 className="text-3xl font-headingFont font-bold">Blogster.</h2>
          </Link>
        </div>
        {toggle ? (
          <MdOutlineClose
            className="block md:hidden"
            size="25"
            onClick={() => setToggle(false)}
          />
        ) : (
          <GiHamburgerMenu
            className="block md:hidden"
            onClick={() => setToggle(true)}
            data-collapse-toggle="navbar-default"
          />
        )}
        {toggle && <NavDropDown />}
        <div
          className="hidden md:flex md:justify-center md:items-center md:gap-3"
          id="navbar-default">
          <form className="flex justify-center items-center gap-2">
            <Input
              className="border border-gray-200 px-5 py-3 w-[30rem] text-sm bg-white text-black dark:bg-black dark:text-white font-bodyFont rounded-full shadow-lg focus:ring-0"
              name="post_search_bar"
              placeholder="Search your posts..."
            />
            <Button className="p-[0.7rem] rounded-full bg-white text-white dark:bg-black dark:text-white shadow-lg">
              <FiSearch size="22" />
            </Button>
          </form>
          <div onClick={toggleProfilePicDropDown}>
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
              className=" relative rounded-full w-10 h-10 object-cover"
              alt="profile pic"
            />
          </div>

          {toggleDropDown && (
            <ProfilePicDropDown toggleDropDown={toggleDropDown} />
          )}

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
