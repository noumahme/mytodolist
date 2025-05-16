import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { ItemContext } from "../CompletedTasks/CompletedTasks";

function TodoItem() {
  //const { toggle_todo, handleDelete, handleEdit } = useContext(TodoContext);
  const { state, dispatch } = useContext(TodoContext);
  const todo = useContext(ItemContext);
  const [isEditing, setisEditing] = useState(false);
  const [editText, seteditText] = useState(todo.text);

  function handleSave() {
    if (editText.trim() === "") return;
    dispatch({ type: "edit_todo", payload: { id: todo.id, text: editText } });
    setisEditing(false);
  }
  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => seteditText(e.target.value)}
          />
          <button type="button" onClick={() => handleSave()}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button
            onClick={(id) =>
              dispatch({ type: "delete_todo", payload: todo.id })
            }
          >
            Delete
          </button>
          <button onClick={() => setisEditing(true)}>Edit</button>
          <button
            onClick={(id) =>
              dispatch({ type: "toggle_todo", payload: todo.id })
            }
          >
            Toggle
          </button>
        </>
      )}
    </li>
  );
}
export default TodoItem;
