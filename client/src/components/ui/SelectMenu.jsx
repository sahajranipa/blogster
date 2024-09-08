import Select, { Option } from "rc-select";
import "rc-select/assets/index.css";

const SelectMenu = ({ menuItems }) => {
  return (
    <form className="mt-6">
      <label
        for="select_blog_category"
        class="block mb-6 text-base font-medium font-headingFont text-gray-900 dark:text-white">
        Select Blog Category
      </label>
      <select
        id="select_blog_category"
        class="block w-full px-4 py-3 text-base text-black  rounded-lg bg-white  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
        <option className="font-bodyFont" selected>
          Choose a Category for your Blog
        </option>
        {menuItems.map((item) => (
          <option className="font-bodyFont" value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectMenu;
