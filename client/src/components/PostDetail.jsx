import { useEffect, useState } from "react";
import RelatedBlogsContainer from "./RelatedBlogsContainer";
import { useParams } from "react-router-dom";
import Image from "./ui/Image";

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
    <div className="flex flex-col items-center space-y-6 mx-auto h-screen mt-12">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="flex justify-between items-center space-x-2">
          <span clasName="text-xl font-bodyFont">Written By :</span>
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
            className="rounded-full w-10 h-10 object-cover"
            alt="profile pic"
          />
          <span className="font-bold font-bodyFont">John Smith</span>
          <span className="font-semibold font-bodyFont italic">
            18 min read
          </span>
        </div>
        <h1 className="text-[4rem] text-center font-headingFont font-[400]">
          Best stategy to Achieve Profitable Harvesting
        </h1>
        <p className="text-center w-full text-md font-bodyFont">{post?.body}</p>
        <Image
          src="https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="orange farm"
          className="rounded-lg w-[60%] h-[70%] object-cover"
        />
        <p className=" text-pretty text-md font-bodyFont leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          et, dolor laboriosam eius, sequi omnis maxime assumenda fugiat alias
          veniam ea laudantium sapiente natus placeat qui aperiam ipsum,
          molestias inventore? Nihil, sint. Facere iusto ipsam, voluptatum unde
          temporibus ullam perspiciatis omnis blanditiis porro quis alias, nobis
          dicta doloribus accusamus magni dolore laborum molestias! Placeat
          possimus perspiciatis voluptatem voluptate officiis nobis. Rerum
          mollitia architecto odio ut esse minus? Reiciendis earum, voluptatem
          fugiat architecto quasi obcaecati harum deserunt iste dolorem culpa
          saepe doloremque nulla rerum facilis ratione in ipsum laborum porro
          sint. Consectetur, voluptatem cupiditate! Laudantium architecto
          accusamus, eveniet vitae et ipsam facere, ea inventore, corrupti
          mollitia explicab quisquam, quas, eaque ex, excepturi officiis!
          Molestiae numquam reiciendis ipsam qui soluta ad, aliquam, blanditiis
          repellendus eveniet quod ullam fuga? Quis possimus hic animi officiis
          sed numquam sit aliquid officia dolore enim ipsam, quas, quos dolores
          velit alias modi nesciunt ipsum minus illo itaque voluptatum natus! A
          deleniti consequuntur nulla?
        </p>
      </div>
      <div className="flex flex-col justify-start space-y-6">
        <h2 className="text-3xl text-start font-headingFont font-semibold">
          Related Blogs
        </h2>
        <hr className="h-px my-1 w-full bg-gray-400 border-0 dark:bg-gray-400" />
        <div className="grid grid-cols-4 justify-center items-center gap-2 space-y-2">
          <RelatedBlogsContainer />
          <RelatedBlogsContainer />
          <RelatedBlogsContainer />
          <RelatedBlogsContainer />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
