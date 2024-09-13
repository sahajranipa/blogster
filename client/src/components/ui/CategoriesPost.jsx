import React from "react";
import "../../styles/categoriespost.css";
import CategoryListItem from "./CategoryListItem";

const CategoriesPost = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ol>
          <li>
            <CategoryListItem />
          </li>

          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
        </ol>
      </div>
    </>
  );
};

export default CategoriesPost;
