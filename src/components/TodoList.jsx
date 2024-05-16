import React from "react";

function TodoList({ todo, isDone, handleIsDone, handleDelete }) {
  const { id, title, body } = todo;

  const todoBoxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "220px",
    height: "100px",
    padding: "20px",
    border: "3px solid orange",
    borderRadius: "10px",
    margin: "0 20px 20px 0",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const bodyStyle = {
    fontSize: "14px",
  };

  const buttonBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const deleteButtonStyle = {
    padding: "4px 40px",
    fontSize: "12px",
    backgroundColor: "white",
    border: "2px solid red",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const statusButtonStyle = {
    padding: "4px 40px",
    fontSize: "12px",
    backgroundColor: "white",
    border: "2px solid green",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <>
      <li key={id} style={todoBoxStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={bodyStyle}>{body}</div>
        <div style={buttonBoxStyle}>
          <button onClick={() => handleDelete(id)} style={deleteButtonStyle}>
            삭제
          </button>
          <button onClick={() => handleIsDone(id)} style={statusButtonStyle}>
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoList;
