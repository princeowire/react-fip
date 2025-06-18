import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  const handleToggle = () => onToggle(todo.id);
  const handleDelete = () => onDelete(todo.id);

  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        display: "flex",
        gap: "10px",
        alignItems: "center"
      }}
    >
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <button onClick={handleToggle}>{todo.done ? "Undo" : "Done"}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
