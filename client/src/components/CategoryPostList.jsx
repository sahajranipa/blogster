import React from "react";
import { useParams } from "react-router-dom";
import CategoriesPost from "./ui/CategoriesPost";

const CategoryPostList = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-col justify-center items-center mx-auto mb-[3rem]">
      <h1 className="text-[6rem] font-headingFont mt-4 text-center">
        Software Development
      </h1>

      <CategoriesPost />
    </div>
  );
};

export default CategoryPostList;
