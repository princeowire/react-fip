import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItems";

export default class TodoList extends Component {
  componentDidMount() {
    console.log("TodoList Mounted"); // lifecycle example
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      console.log("TodoList Updated");
    }
  }

  render() {
    const { todos, onToggle, onDelete } = this.props;

    return (
      <Fragment>
        {todos.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}
