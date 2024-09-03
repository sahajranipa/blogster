import React from "react";
import Image from "./ui/Image";

const TopBlogsContainer = () => {
  return (
    <>
      <h1 className="text-4xl font-headingFont text-start font-semibold">
        Top Blogs
      </h1>
      <div className="grid grid-cols-2 col-span-2 justify-center gap-4 w-full mx-auto mt-6 mb-6">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1555465910-31f7f20a184d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="greenary"
            className="rounded-xl object-cover w-[50%]"
          />
          <div>
            <div className="flex flex-col justify-start space-y-2">
              <div className="text-sm text-gray-700 mt-4">10 min</div>
              <h2 className="text-2xl font-semibold text-gray-950">
                Tech Marvels for Your Home
              </h2>
              <p className="text-gray-500">
                Discover the cutting edge technologies that are reshaping the
                home decors.from smart gadgets to integrated systems.
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-3 mt-3">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                className="rounded-full w-10 h-10 object-cover"
                alt="profile pic"
              />
              <div className="flex flex-col justify-start items-center">
                <span className=" text-gray-700">Written by</span>
                <span className="font-semibold text-gray-950">John smith</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="flex flex-row justify-start items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1555465910-31f7f20a184d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="greenary"
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
            <div>
              <div className="flex flex-col justify-start space-y-3">
                <div className="text-sm text-gray-700">10 min</div>
                <h2 className="text-2xl font-semibold text-gray-950">
                  Tech Marvels for Your Home
                </h2>
                <p className="text-gray-500 h-full text-ellipsis overflow-hidden">
                  Discover the cutting edge technologies that are reshaping the
                  home decors.from smart gadgets to integrated systems.
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-3 mt-3">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                  className="rounded-full w-10 h-10 object-cover"
                  alt="profile pic"
                />
                <div className="flex flex-col justify-start items-center">
                  <span className=" text-gray-700">Written by</span>
                  <span className="font-semibold text-gray-950">
                    John smith
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1555465910-31f7f20a184d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="greenary"
              className="rounded-xl object-cover w-[30%] aspect-square"
            />
            <div>
              <div className="flex flex-col justify-start space-y-3">
                <div className="text-sm text-gray-700">10 min</div>
                <h2 className="text-2xl font-semibold text-gray-950">
                  Tech Marvels for Your Home
                </h2>
                <p className="text-gray-500 text-ellipsis overflow-hidden">
                  Discover the cutting edge technologies that are reshaping the
                  home decors.from smart gadgets to integrated systems.
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-3 mt-3">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                  className="rounded-full w-10 h-10 object-cover"
                  alt="profile pic"
                />
                <div className="flex flex-col justify-start items-center">
                  <span className=" text-gray-700">Written by</span>
                  <span className="font-semibold text-gray-950">
                    John smith
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBlogsContainer;
