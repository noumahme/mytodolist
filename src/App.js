import React from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./components/TodoList/TodoList";
import { CompletedTasks } from "./components/CompletedTasks/CompletedTasks";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  return (
    <TodoProvider>
      <TodoList>
        <CompletedTasks>
          <TodoItem />
        </CompletedTasks>
      </TodoList>
    </TodoProvider>
  );
}

export default App;
