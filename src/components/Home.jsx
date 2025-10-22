import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={() => navigate("/form")}>open Multi Step Form</button>
      <br></br>
      <button onClick={() => navigate("/progress")}>open Progress Bar</button>
      <br></br>
      <button onClick={() => navigate("/Sidebar")}>open Side Bar</button>
      <br></br>
      <button onClick={() => navigate("/multiTabs")}>open Multi Tabs</button>
    </div>
  );
}
export default Home;
