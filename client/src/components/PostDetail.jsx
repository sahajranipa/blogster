import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    };
    getPost();
  }, [id]);
  console.log(post);
  return (
    <div className="border border-gray-300 flex flex-col items-center space-y-2 mx-auto h-screen w-[80%] mt-3 mb-3 p-4 rounded-lg">
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <p className="text-md">{post?.body}</p>
    </div>
  );
};

export default PostDetail;
