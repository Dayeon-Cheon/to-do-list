import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ title, todos, setTodos }) => {
  const bodyBoxStyle = {
    margin: "0 20px",
  };

  const statusStyle = {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const todoContainerStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0",
  };

  return (
    <div style={bodyBoxStyle}>
      <div>
        <div style={statusStyle}>{title}</div>
        <ul style={todoContainerStyle}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} setTodos={setTodos} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
