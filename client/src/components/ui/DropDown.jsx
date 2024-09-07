import { useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import Button from "./Button";

const DropDown = () => {
  const [toggle, setToogle] = useState(false);
  return (
    <>
      <Button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className=" text-black border border-black  bg-white hover:bg-black hover:text-white font-headingFont leading-1  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-centers"
        type="button"
        onClick={() => setToogle((prev) => !prev)}>
        Categories
        <TiArrowSortedDown className="ms-3 mb-0" />
      </Button>

      <div
        id="dropdownHover"
        className={`${
          toggle
            ? `z-90 mt-4 absolute   bg-white text-black 
        divide-y font-bodyFont divide-gray-100 rounded-lg shadow-2xl w-52`
            : `z-90 mt-4 absolute hidden bg-white text-black 
        divide-y font-bodyFont divide-gray-100 rounded-lg shadow-2xl w-52`
        }`}>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton">
          <li>
            <Link
              to="#"
              className="block font-bodyFont px-4 py-2 text-black  hover:bg-black hover:text-white">
              Software Development
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block font-bodyFont px-4 py-2 text-black  hover:bg-black hover:text-white">
              Entertaiment
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block font-bodyFont px-4 py-2 text-black  hover:bg-black hover:text-white">
              UI/UX designing
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block font-bodyFont px-4 py-2 text-black  hover:bg-black hover:text-white">
              Food and Travelling
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
