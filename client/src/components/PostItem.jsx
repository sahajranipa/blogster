import React from "react";
import Button from "./ui/Button";
import { NavLink } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="border border-gray-300 p-4 rounded-lg w-[65%]">
      <h1 className="text-2xl font-headingFont font-bold">{title}</h1>
      <p className="text-md font-bodyFont">{body}</p>
      <div className="flex justify-end mt-4">
        <Button
          className="text-black bg-white hover:bg-black  hover:text-white  
              focus:outline-none border border-black
               font-headingFont 
               font-medium  rounded-full text-sm px-5 
              py-2.5 text-center inline-flex items-center me-2 mb-2"
          size="lg">
          <NavLink to={`posts/${id}`}>See More</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
