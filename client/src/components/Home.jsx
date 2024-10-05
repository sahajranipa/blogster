import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="font-headingFont text-center mt-[7%] mb-3 min-h-screen">
      <h1 className="font-bold text-center text-7xl md:text-9xl">Blogster.</h1>
      <p className="text-xl md:text-3xl text-center md:text-balance leading-[3rem] mt-8 w-full md:w-3/4 mx-auto">
        Your one and only platform for blogging.Where you will create your
        gradient for knowledge.Which will lead you to the milestones🚩
      </p>

      <Button
        className="bg-black text-white font-headingFont font-medium rounded-full px-5 py-3 mt-10 "
        onClick={() => navigate("/sign-up")}>
        Start Your Journey <BsArrowRight className="inline w-7 h-7" />
      </Button>
      <div className="flex flex-col w-full md:w-[60%] space-y-3 mx-auto mt-5 border border-gray-300 rounded-xl p-7 shadow-xl text-left">
        <h2 className="font-headingFont text-pretty text-xl font-bold">
          Welcome to Blogster! Your Hub for Fresh, Engaging, and Insightful
          Content
        </h2>
        <p className="font-bodyFont text-pretty">
          {" "}
          At Blogster, we believe that every story deserves to be told and every
          voice deserves to be heard. Our platform is designed for curious minds
          who are passionate about learning, sharing, and connecting. Whether
          you're here to read, write, or simply explore, we've got something for
          everyone!
        </p>
      </div>

      <div className="flex flex-col space-y-3 w-full md:w-[60%] mx-auto mt-5 bg-black text-white border border-gray-300 rounded-xl p-7 shadow-xl text-left">
        <h2 className="font-headingFont text-pretty text-xl font-bold">
          Discover a World of Topics
        </h2>
        <p className="font-bodyFont text-pretty">
          {" "}
          From the latest in technology, health, lifestyle, and personal
          development to creative writing, travel diaries, and thought-provoking
          opinion pieces, Blogster covers a wide range of topics to keep you
          informed, entertained, and inspired. Dive into our carefully curated
          articles and discover stories that resonate with you.
        </p>
      </div>
      <div className="flex flex-col space-y-3 w-full md:w-[60%] mx-auto mt-5 border border-gray-300 rounded-xl p-7 shadow-xl text-left">
        <h2 className="font-headingFont text-pretty text-xl font-bold">
          Write, Share, and Inspire
        </h2>
        <p className="font-bodyFont text-pretty">
          {" "}
          Are you a writer looking to share your thoughts with the world? Join
          our community of bloggers and start publishing today! Blogster
          provides a user-friendly platform where you can write, publish, and
          engage with a vibrant community of readers and fellow writers. Share
          your experiences, insights, and ideas, and inspire others with your
          unique voice.
        </p>
      </div>
      <div className="flex w-full md:w-[60%] flex-col gap-3 mx-auto">
        <div className="flex flex-col space-y-3  mx-auto mt-5 bg-black text-white border border-gray-300 rounded-xl p-7 shadow-xl text-left">
          <h2 className="font-headingFont  text-xl font-bold">
            Join Our Community
          </h2>
          <p className="font-bodyFont text-pretty">
            {" "}
            At Blogster, we value engagement and community. Connect with
            like-minded readers and writers, leave comments, share your favorite
            posts, and start meaningful conversations. Our mission is to create
            a space where ideas flow freely, and everyone feels welcome to
            contribute.
          </p>
        </div>
        <div className="flex flex-col space-y-3 mx-auto border border-gray-300 rounded-xl p-7 shadow-xl text-left">
          <h2 className="font-headingFont text-xl font-bold">
            Start Your Blogging Journey with Blogster!
          </h2>
          <p className="font-bodyFont text-pretty">
            {" "}
            Whether you're a seasoned blogger or just starting, Blogster is here
            to help you grow. Explore, write, share, and connect because every
            blog is a story worth telling.
          </p>
        </div>
        <div className="flex items-center flex-col space-y-3  mx-auto  bg-black text-white border border-gray-300 rounded-xl p-7 shadow-xl text-left">
          <h2 className="font-headingFont  text-xl font-bold">Stay Updated</h2>
          <p className="font-bodyFont text-pretty">
            {" "}
            Never miss out on fresh content! Subscribe to our newsletter and get
            the latest blogs delivered straight to your inbox. Follow us on
            social media to stay updated with trending topics, featured writers,
            and more.
          </p>
          <div className="flex md:text-center md:space-y-4">
            <Input
              className="rounded-lg px-3 py-1.5 mr-2 w-[21rem] text-black"
              type="email"
              placeholder="Subscribe to our newsletter"
            />
            <Button
              className="border border-gray-400 bg-black text-white hover:bg-white hover:text-black font-headingFont font-medium rounded-lg px-3 py-1.5"
              variant="outline">
              Subscribe{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
