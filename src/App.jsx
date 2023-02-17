import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;
