const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const pageTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div id="header" style={headerStyle}>
      <h2 style={pageTitleStyle}>My Todo List</h2>
      <h2 style={pageTitleStyle}>React</h2>
    </div>
  );
};

export default Header;
