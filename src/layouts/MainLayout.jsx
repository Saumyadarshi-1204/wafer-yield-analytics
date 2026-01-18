import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
