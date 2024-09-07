import Button from "../Button";
import XIcon from "./XIcon";

const BlogPublishModal = ({ isOpen, children, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          id="large-modal"
          tabindex="-1"
          className="fixed bg-black/50 inset-0 z-50 w-full p-4 md:inset-0 h-full max-h-full overflow-x-hidden overflow-y-auto">
          <div className="absolute left-10 right-10 rounded-lg shadow dark:bg-gray-700 ">
            <div className="p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-headingFont font-medium text-gray-900 dark:text-white">
                  What is going on in your mind?
                </h2>

                <span>
                  <Button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="large-modal"
                    onClick={onClose}>
                    <XIcon className="text-black" />
                    <span className="sr-only">Close modal</span>
                  </Button>
                </span>
              </div>

              <div className="p-4 md:p-5 space-y-4">{children}</div>
              <div class="flex justify-center items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                <Button
                  data-modal-hide="extralarge-modal"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Save your Post
                </Button>
                <Button
                  data-modal-hide="extralarge-modal"
                  type="button"
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default BlogPublishModal;
