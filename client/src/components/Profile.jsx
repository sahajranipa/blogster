import React from "react";
import ProfilePic from "./ui/ProfilePic";
import TextArea from "./ui/TextArea";
import Input from "./ui/Input";
import Button from "./ui/Button";

const Profile = () => {
  return (
    <form
      className="mt-3 mx-auto max-w-xl space-y-6 border
 border-gray-300 p-8 rounded-md shadow-lg">
      <ProfilePic
        name="Sahaj Ranipa"
        // image="https://randomuser.me/api/portraits/men/55.jpg"
        className="avatar"
      />
      <div className="text-2xl font-bold">Sahaj Ranipa</div>

      <TextArea name="bio" value="Bio" />

      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="web_site_link">Web-Site Link</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="web_site_link"
          type="text"
          placeholder="www.johndoe.com"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="location">Location</label>
        <Input
          className="border p-2 rounded-md border-gray-300"
          name="location"
          type="text"
          placeholder="San Francisco, CA"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <Button
          className="w-full border border-gray-400 font-headingFont font-medium rounded-lg py-2"
          variant="outline">
          Cancel{" "}
        </Button>
        <Button
          type="submit"
          className="w-full bg-black text-white font-headingFont font-medium rounded-lg py-2">
          Save Profile
        </Button>
      </div>
    </form>
  );
};

export default Profile;
