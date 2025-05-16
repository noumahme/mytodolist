import TodoItem from "../TodoItem/TodoItem";
import "./completedTasks.css";
import { TodoContext } from "../../Context/TodoContext";
import { createContext, useContext } from "react";

const ItemContext = createContext(null);

function CompletedTasks() {
  const { state } = useContext(TodoContext);
  const { Todos } = state;

  const completed = Todos.filter((todo) => todo.completed);
  const pending = Todos.filter((todo) => !todo.completed);

  return (
    <div className="tasks">
      <div>
        <h3>Pending Tasks</h3>
        <ul>
          {pending.map((todo) => (
            <ItemContext.Provider value={todo} key={todo.id}>
              <TodoItem />
            </ItemContext.Provider>
          ))}
        </ul>
      </div>
      <div>
        <h3>Completed Tasks</h3>
        <ul>
          {completed.map((todo) => (
            <ItemContext.Provider value={todo} key={todo.id}>
              <TodoItem />
            </ItemContext.Provider>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { CompletedTasks, ItemContext };
