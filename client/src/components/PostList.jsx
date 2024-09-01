import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import PostItem from "./PostItem";
import Button from "./ui/Button";

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
    <div className="flex flex-col items-center space-y-2 mb-3 mx-auto w-full">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <Button className=" bg-black text-white rounded-full p-5 fixed z-50 bottom-20 right-10">
        <FaPlus className="text-white" size="25" />
      </Button>
    </div>
  );
}

export default PostList;
