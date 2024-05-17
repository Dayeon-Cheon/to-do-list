const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

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

  const contentStyle = {
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
    <div style={todoBoxStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={contentStyle}>{content}</div>
      <div style={buttonBoxStyle}>
        <button onClick={toggleTodo} style={statusButtonStyle}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={deleteTodo} style={deleteButtonStyle}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
