import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const TodoContainer = () => {
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

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <TodoList
        title="Working..🔥"
        todos={workingTodos}
        setTodos={setTodos}
      ></TodoList>
      <TodoList
        title="Done!💪"
        todos={doneTodos}
        setTodos={setTodos}
      ></TodoList>
    </div>
  );
};

export default TodoContainer;
