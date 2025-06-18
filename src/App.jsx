import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: true },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>ToDo List (React)</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleDone} onDelete={deleteTodo} />
    </>
  );
}
