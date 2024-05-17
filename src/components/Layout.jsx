import React from "react";

const Layout = ({ children }) => {
  const globalStyle = {
    maxWidth: "1200px",
    minWidth: "800px",
    margin: "0 auto",
  };

  return <main style={globalStyle}>{children}</main>;
};

export default Layout;
