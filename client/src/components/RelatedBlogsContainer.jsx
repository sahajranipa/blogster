import React from "react";
import Image from "./ui/Image";

const RelatedBlogsContainer = () => {
  return (
    <div className="flex flex-col w-[80%] gap-4 aspect-square items-start justify-start mb-10">
      <Image
        src="https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="more farm images"
        className="object-cover w-[80%] aspect-square rounded-md"
      />
      <span>October 23,2022</span>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sint
        ipsum ut nihil nisi sunt.
      </p>
    </div>
  );
};

export default RelatedBlogsContainer;
