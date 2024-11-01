import { FcLike } from "react-icons/fc";
import { IoIosShareAlt } from "react-icons/io";
import { MdBookmark } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";

import Button from "./Button";

const ArticleFloatingButton = () => {
  return (
    <div className="flex justify-center items-center space-x-8 fixed z-50 bottom-5 rounded-full px-10 py-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-2xl my-auto">
      <FcLike size="30" color="white" />

      <IoIosShareAlt size="30" />

      <MdBookmark size="30" />

      <BiCommentDetail size="30" />
    </div>
  );
};

export default ArticleFloatingButton;
