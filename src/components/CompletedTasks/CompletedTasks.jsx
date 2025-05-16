import TodoItem from "../TodoItem/TodoItem";
import "./completedTasks.css";
import { TodoContext } from "../TodoList/TodoList";
import { createContext, useContext } from "react";

const ItemContext = createContext(null);

function CompletedTasks({ children }) {
  const { Todos, handleToggle, handleDelete, handleEdit } =
    useContext(TodoContext);

  const completed = Todos.filter((todo) => todo.completed);
  const pending = Todos.filter((todo) => !todo.completed);
  console.log(completed);
  return (
    <>
      <div className="tasks">
        {console.log("completed")}
        <div>
          <h3>Pending Tasks</h3>
          <ul>
            {pending.map((p) => (
              // <li key={p.id}>
              <ItemContext.Provider value={p}>
                <TodoItem />
              </ItemContext.Provider>
              // </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Completed Tasks</h3>
          <ul>
            {completed.map((c) => (
              // <li key={c.id}>
              <ItemContext.Provider value={c}>
                <TodoItem />
              </ItemContext.Provider>
              // </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export { CompletedTasks, ItemContext };
