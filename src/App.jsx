import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      title: "Javascript 공부",
      body: "Deep Dive 정독",
      isDone: true,
    },
    {
      id: new Date().getTime() + 1,
      title: "헬스장 가기",
      body: "천국의 계단 30분",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("제목과 내용을 모두 입력해 주세요.");
      return;
    }

    const newTodo = {
      id: new Date(),
      title,
      body,
      isDone: false,
    };

    setTodos([...todos, newTodo]);

    setTitle("");
    setBody("");
  };

  const isDoneToggleHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const globalStyle = {
    maxWidth: "1200px",
    minWidth: "800px",
    margin: "0 auto",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const pageTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const inputFormStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "4px",
    backgroundColor: "WhiteSmoke",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };

  const inputStyle = {
    margin: "0 10px",
    padding: "4px",
    border: "none",
    borderRadius: "4px",
    width: "180px",
  };

  const addButtonStyle = {
    padding: "4px 40px",
    fontSize: "12px",
    backgroundColor: "green",
    border: "2px solid green",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
  };

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
    <main style={globalStyle}>
      <div id="header" style={headerStyle}>
        <h2 style={pageTitleStyle}>My Todo List</h2>
        <h2 style={pageTitleStyle}>React</h2>
      </div>
      <form onSubmit={addTodoHandler}>
        <div style={inputFormStyle}>
          <div>
            <label htmlFor="title" style={labelStyle}>
              제목
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={titleChangeHandler}
              style={inputStyle}
            ></input>
            <label htmlFor="body" style={labelStyle}>
              내용
            </label>
            <input
              id="body"
              type="text"
              value={body}
              onChange={bodyChangeHandler}
              style={inputStyle}
            ></input>
          </div>
          <div>
            <button type="submit" style={addButtonStyle}>
              추가
            </button>
          </div>
        </div>
      </form>
      <div style={bodyBoxStyle}>
        <div>
          <div style={statusStyle}>Working..🔥</div>
          <ul style={todoContainerStyle}>
            {todos
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                return (
                  <TodoList
                    todo={todo}
                    key={todo.id}
                    isDone={todo.isDone}
                    handleIsDone={isDoneToggleHandler}
                    handleDelete={deleteTodoHandler}
                  />
                );
              })}
          </ul>
        </div>
        <div>
          <div style={statusStyle}>Done..💪</div>
          <ul style={todoContainerStyle}>
            {todos
              .filter((todo) => todo.isDone === true)
              .map((todo) => {
                return (
                  <TodoList
                    todo={todo}
                    key={todo.id}
                    isDone={todo.isDone}
                    handleIsDone={isDoneToggleHandler}
                    handleDelete={deleteTodoHandler}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default App;
