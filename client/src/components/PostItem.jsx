import React from "react";
import Button from "./ui/Button";
import { NavLink } from "react-router-dom";
import Image from "./ui/Image";

const PostItem = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="flex flex-col justify-start items-start rounded-xl aspect-square w-full space-y-3">
      <div>
        <Image
          src="https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
          alt="post image"
          className="object-cover rounded-xl aspect-square"
        />
      </div>

      <div className="flex flex-col justify-start items-start space-y-3">
        {" "}
        <span>10 min</span>
        <h1 className="text-xl text-ellipsis overflow-hidden font-headingFont font-semibold">
          {title}
        </h1>
        <p className="text-sm text-ellipsis overflow-hidden font-bodyFont">
          {body}
        </p>
        <Button
          className="text-black bg-white hover:bg-black  hover:text-white  
              focus:outline-none border border-black
               font-headingFont 
               font-medium  rounded-full text-sm px-5 
              py-2.5 text-center inline-flex items-center me-2 mb-2"
          size="lg">
          <NavLink to={`/posts/${id}`}>See More</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
