import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";

const AddBlogBtn = ({ onClick }) => {
  return (
    <>
      <Button
        className=" bg-black text-white rounded-full p-5 fixed z-50 bottom-10 right-5"
        onClick={onClick}>
        <FaPlus className="text-white" size="25" />
      </Button>
    </>
  );
};

export default AddBlogBtn;
