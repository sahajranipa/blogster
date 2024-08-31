import React from "react";

const TextArea = ({ labelName, value }) => {
  return (
    <>
      <div className="flex flex-col space-y-2 justify-start">
        <lable htmlFor={labelName}>{value}</lable>
        <textarea
          className="border p-4 rounded-md border-gray-300"
          row="30"
          col="20"
          placeholder="Tell Us about yourself"></textarea>
      </div>
    </>
  );
};

export default TextArea;
