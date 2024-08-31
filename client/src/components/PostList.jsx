import { useState, useEffect } from "react";
import PostItem from "./PostItem";

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
    <div className="flex flex-col items-center space-y-2 mx-auto w-full mt-3">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
