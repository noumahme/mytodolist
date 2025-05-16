import React, { createContext, useReducer } from "react";

const TodoContext = createContext();

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

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
