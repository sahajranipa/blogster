import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="mt-[10%]">
      <div className="font-headingFont text-center">
        <h1 className="font-bold text-center text-9xl">Blogster.</h1>
        <p className=" text-3xl text-balance leading-[3rem] mt-8 w-3/4 mx-auto">
          Your one and only platform for blogging.Where you will create your
          gradient for knowledge.Which will lead you to the milestones🚩
        </p>

        <Button
          className="bg-black text-white font-headingFont font-medium rounded-full px-5 py-3 mt-10 "
          onClick={() => navigate("/sign-up")}>
          Start Your Journey <BsArrowRight className="inline w-7 h-7" />
        </Button>
      </div>
    </main>
  );
};

export default Home;
