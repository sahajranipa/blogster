import React from "react";
import ProfilePic from "./ui/ProfilePic";
import TextArea from "./ui/TextArea";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "../schemas/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Profile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: { email: "", bio: "", web_site_link: "", location: "" },
    resolver: zodResolver(ProfileSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="mt-3 mb-3 mx-auto max-w-xl space-y-3 border
 border-gray-300 p-8 rounded-md shadow-lg"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center space-y-2">
        <ProfilePic
          name="Sahaj Ranipa"
          // image="https://randomuser.me/api/portraits/men/55.jpg"
          className="avatar"
        />
        <div className="text-2xl font-bold">Sahaj Ranipa</div>
      </div>

      <TextArea name="bio" value="Bio" {...register("bio")} />
      {errors?.bio?.message && (
        <p className="text-red-700 text-sm mb-4">{errors.bio.message}</p>
      )}

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
        />
      </div>
      {errors?.email?.message && (
        <p className="text-red-700 text-sm mb-4">{errors.email.message}</p>
      )}
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
        />
      </div>
      {errors?.web_site_link?.message && (
        <p className="text-red-700 text-sm mb-4">
          {errors.web_site_link.message}
        </p>
      )}
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
        />
      </div>
      {errors?.location?.message && (
        <p className="text-red-700 text-sm mb-4">{errors.location.message}</p>
      )}
      <div className="flex flex-col md:flex-row gap-2 mt-6">
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
