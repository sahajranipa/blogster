import React from "react";
import Button from "./ui/Button";
import { Link, NavLink } from "react-router-dom";
import Image from "./ui/Image";

const PostItem = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className=" bg-white shadow-lg p-3 flex flex-col justify-start items-start rounded-2xl aspect-square w-full space-y-3">
      <Link to={`/posts/${id}`}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1720886073981-f975d3dc93f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
          alt="post image"
          className="object-cover rounded-xl aspect-square"
        />
      </Link>

      <div className="flex flex-col space-y-3">
        {" "}
        <div className="flex justify-between items-center">
          <span>10 min</span>
          <span className=" text-[#4124C1] font-semibold font-bodyFont text-sm p-3 rounded-full bg-[#EDECF9]">
            Software Development
          </span>
        </div>
        <h1 className="text-xl text-ellipsis overflow-hidden font-headingFont font-semibold">
          {title}
        </h1>
        <p className="text-sm text-ellipsis overflow-hidden font-bodyFont">
          {body}
        </p>
      </div>
      <div className="flex justify-between items-center gap-10 w-full mt-4">
        <div className="flex justify-start items-center gap-3">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
            className="rounded-full w-10 h-10 object-cover"
            alt="profile pic"
          />
          <div className="flex flex-col justify-start items-center">
            <span className=" text-gray-700">Written by</span>
            <span className="font-semibold text-gray-950">John smith</span>
          </div>
        </div>{" "}
        <Button
          className="text-black bg-white hover:bg-black  hover:text-white  
              focus:outline-none border border-black
               font-headingFont 
               font-medium text-right  rounded-full text-sm px-4 
              py-2 inline-flex items-center me-2"
          size="lg">
          <NavLink to={`/posts/${id}`}>Read More</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
