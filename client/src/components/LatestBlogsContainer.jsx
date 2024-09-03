import React from "react";
import PostItem from "./PostItem";

const LatestBlogsContainer = ({ posts }) => {
  return (
    <>
      <div className="flex flex-col justify-start gap-6">
        <h1 className="text-4xl font-headingFont text-start font-semibold">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-3 gap-5 w-full">
          {posts?.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBlogsContainer;
