import BlogPublishModal from "./ui/BlogPublish/BlogPublishModal";
import Input from "./ui/Input";
import SelectMenu from "./ui/SelectMenu";
import { menuItems } from "../lib/menuItems";

const AddBlog = ({ showModal, toggleModal }) => {
  return (
    <BlogPublishModal isOpen={showModal} onClose={toggleModal}>
      <div className="overflow-x-hidden overflow-y-auto my-6">
        <div className="flex flex-col items-start space-y-6">
          <label
            className="text-base font-medium font-headingFont"
            htmlFor="blog_heading">
            Enter the Heading for your blog
          </label>
          <Input
            className="px-4 py-3 text-black font-bodyFont rounded-lg w-full focus:ring-0"
            placeholder="Enter The Heading For Your Blog..."
            name="blog_heading"
            type="text"
          />
        </div>
        <SelectMenu menuItems={menuItems} />
      </div>
    </BlogPublishModal>
  );
};

export default AddBlog;
