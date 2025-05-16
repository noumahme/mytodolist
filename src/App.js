import logo from "./logo.svg";
import "./App.css";
import { TodoContext, TodoList } from "./components/TodoList/TodoList";
import {
  CompletedTasks,
  ItemContext,
} from "./components/CompletedTasks/CompletedTasks";
import TodoItem from "./components/TodoItem/TodoItem";
function App() {
  return (
    <TodoList>
      <CompletedTasks>
        <TodoItem />
      </CompletedTasks>
    </TodoList>
  );
}

export default App;
