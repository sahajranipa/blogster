import React from "react";
import ProfilePic from "./ui/ProfilePic";
import TextArea from "./ui/TextArea";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: { email: "", bio: "", web_site_link: "", location: "" },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="mt-3 mb-3 mx-auto max-w-xl space-y-3 border
 border-gray-300 p-8 rounded-md shadow-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <ProfilePic
        name="Sahaj Ranipa"
        // image="https://randomuser.me/api/portraits/men/55.jpg"
        className="avatar"
      />
      <div className="text-2xl font-bold">Sahaj Ranipa</div>

      <TextArea name="bio" value="Bio" {...register("bio")} />

      <label className="block mb-2" htmlFor="email">
        Email
      </label>
      <div className="flex flex-col space-y-2">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("email")}
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>
      <label className="block mb-2" htmlFor="web_site_link">
        Web-Site Link
      </label>
      <div className="flex flex-col space-y-2">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("web_site_link")}
          name="web_site_link"
          type="text"
          placeholder="www.johndoe.com"
          required
        />
      </div>
      <label className="block mb-2" htmlFor="location">
        Location
      </label>
      <div className="flex flex-col space-y-2">
        <Input
          className="border p-2 rounded-md border-gray-300"
          {...register("location")}
          name="location"
          type="text"
          placeholder="San Francisco, CA"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <Button
          className="w-full border border-gray-400 font-headingFont font-medium rounded-lg py-2"
          variant="outline">
          Cancel{" "}
        </Button>
        <Button
          type="submit"
          className="w-full bg-black text-white font-headingFont font-medium rounded-lg space-y-2">
          Save Profile
        </Button>
      </div>
    </form>
  );
};

export default Profile;
