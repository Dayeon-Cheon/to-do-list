import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <Layout>
      <Header></Header>
      <TodoContainer></TodoContainer>
    </Layout>
  );
};

export default App;
