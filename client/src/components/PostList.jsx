import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import TopBlogsContainer from "./TopBlogsContainer";
import PostItem from "./PostItem";
import Button from "./ui/Button";
import LatestBlogsContainer from "./LatestBlogsContainer";

function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <div className="grid grid-cols-auto gap-6 mt-4 mx-auto">
      <TopBlogsContainer />
      <LatestBlogsContainer posts={posts} />

      <Button className=" bg-black text-white rounded-full p-5 fixed z-50 bottom-10 right-5">
        <FaPlus className="text-white" size="25" />
      </Button>
    </div>
  );
}

export default PostList;
