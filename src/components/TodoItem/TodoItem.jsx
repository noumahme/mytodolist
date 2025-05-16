import { useContext, useState } from "react";
import { TodoContext } from "../TodoList/TodoList";
import { ItemContext } from "../CompletedTasks/CompletedTasks";

function TodoItem() {
  const { Todos, handleToggle, handleDelete, handleEdit } =
    useContext(TodoContext);
  const todo = useContext(ItemContext);
  const [isEditing, setisEditing] = useState(false);
  const [editText, seteditText] = useState(todo.text);

  function handleSave() {
    if (editText.trim() === "") return;
    handleEdit(todo.id, editText);
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
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => setisEditing(true)}>Edit</button>
          <button onClick={() => handleToggle(todo.id)}>Toggle</button>
        </>
      )}
    </li>
  );
}
export default TodoItem;
