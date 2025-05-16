import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";

function TodoList({ children }) {
  const { state, dispatch } = useContext(TodoContext);
  const { input } = state;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          value={input}
          onChange={(e) =>
            dispatch({ type: "change_input", payload: e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "add_todo" })}>Add</button>
      </div>
      {children}
    </div>
  );
}

export default TodoList;
