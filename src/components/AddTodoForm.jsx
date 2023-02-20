import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} className="my-8">
      <input
        className="w-72 h-10"
        type="text"
        placeholder="Add todo here..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button
        className="text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
