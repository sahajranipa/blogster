import React from "react";
import Image from "./Image";

const CategoryListItem = () => {
  return (
    <div className="text-xl flex flex-row gap-12 border-none p-4 shadow-xl rounded-xl">
      <Image
        src="https://images.unsplash.com/photo-1555465910-31f7f20a184d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
        alt="category item"
        className="w-[20%] object-cover rounded-xl ml-5"
      />
      <div className="flex flex-col space-y-2 ">
        <h2 className="font-bodyFont font-semibold text-xl">Title</h2>
        <p className="font-bodyFont text-[1rem] text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis
          quae maiores quam facilis tempore nihil blanditiis ad esse enim, sed
          porro ipsum nostrum eius.
        </p>
        <div className="flex justify-start items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
            className="rounded-full w-10 h-10 object-cover"
            alt="profile pic"
          />
          <span className="text-[0.9rem] font-bold text-gray-700">
            Written by :
          </span>
          <span className="font-semibold text-gray-950 text-[1rem]">
            John smith
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryListItem;
