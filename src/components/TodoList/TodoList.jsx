import React, { createContext, useReducer } from "react";

const TodoContext = createContext(null);

const initialState = {
  Todos: [],
  input: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "change_input":
      return { ...state, input: action.payload };

    case "add_todo":
      if (!state.input.trim()) return state;
      const newTodo = {
        id: Date.now(),
        text: state.input,
        completed: false,
      };
      return {
        ...state,
        Todos: [newTodo, ...state.Todos],
        input: "",
      };

    case "toggle_todo":
      return {
        ...state,
        Todos: state.Todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "delete_todo":
      return {
        ...state,
        Todos: state.Todos.filter((todo) => todo.id !== action.payload),
      };

    case "edit_todo":
      return {
        ...state,
        Todos: state.Todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    default:
      return state;
  }
}

function TodoList({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { Todos, input } = state;

  return (
    <div>
      <div>
        <h2 style={{ display: "block", textAlign: "center" }}>Todo List</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }} id="list">
        <input
          value={input}
          onChange={(e) =>
            dispatch({ type: "change_input", payload: e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "add_todo" })}>Add</button>
      </div>
      <TodoContext.Provider
        value={{
          Todos,
          handleToggle: (id) => dispatch({ type: "toggle_todo", payload: id }),
          handleDelete: (id) => dispatch({ type: "delete_todo", payload: id }),
          handleEdit: (id, text) =>
            dispatch({ type: "edit_todo", payload: { id, text } }),
        }}
      >
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export { TodoList, TodoContext };
