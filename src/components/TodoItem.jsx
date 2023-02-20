import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteTodoClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li>
      <div className="flex justify-between space-y-3 items-center flex-wrap">
        <div>
          <span
            className={completed ? "font-light line-through" : "font-semibold"}
          >
            <input
              className="mr-2"
              type="checkbox"
              checked={completed}
              onChange={handleCompleteClick}
            ></input>
            {title}
          </span>
        </div>
        <div>
          <button
            onClick={handleDeleteTodoClick}
            className="rounded-md bg-red-500 py-0.5 px-2.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
