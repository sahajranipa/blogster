import { useState, useEffect } from "react";
import TopBlogsContainer from "./TopBlogsContainer";
import LatestBlogsContainer from "./LatestBlogsContainer";
import AddBlogBtn from "./ui/AddBlogBtn";
import AddBlog from "./AddBlog";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
    <div className="relative">
      <div className="grid grid-cols-auto gap-6 mt-4 mx-auto">
        <TopBlogsContainer />
        <LatestBlogsContainer posts={posts} />
        <AddBlog showModal={showModal} toggleModal={toggleModal} />

        {!showModal && <AddBlogBtn onClick={toggleModal} />}
      </div>
    </div>
  );
}

export default PostList;
