import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="text-center m-4 p-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        My Todo List
      </h1>
      <AddTodoForm />

      <div className="w-3/5 p-4 mx-auto bg-white border border-gray-200 rounded-lg drop-shadow-lg">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
