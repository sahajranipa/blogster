import React from "react";
import PostItem from "./PostItem";

const LatestBlogsContainer = ({ posts }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-4xl font-headingFont text-start font-semibold">
          Latest Blogs
        </h1>
        <hr className="h-px my-2 w-full bg-gray-400 border-0 dark:bg-gray-400" />
        <div className="grid grid-cols-3 gap-5">
          {posts?.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBlogsContainer;
