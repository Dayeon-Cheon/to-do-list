const TodoForm = ({ setTodos }) => {
  const addTodoHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해 주세요.");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);

    e.target.reset();
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

  return (
    <form onSubmit={addTodoHandler}>
      <div style={inputFormStyle}>
        <div>
          <label htmlFor="title" style={labelStyle}>
            제목
          </label>
          <input name="title" id="title" type="text" style={inputStyle}></input>
          <label htmlFor="content" style={labelStyle}>
            내용
          </label>
          <input
            name="content"
            id="content"
            type="text"
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
  );
};

export default TodoForm;
