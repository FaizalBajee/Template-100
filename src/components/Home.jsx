import React from "react";
import Cards from "./Cards/Cards";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <h1 className="header">No AI, Just Me and My Brain </h1>
      <h1 className="header">Ctrl + Alt + think </h1>
      <div className="cardContainer">
        <Cards endPoint="/Sidebar" header="Open Side Bar" />
        <Cards endPoint="/multiTabs" header="Open Multi Tabs" />
        <Cards endPoint="/progress" header="Open Progress Bar" />
        <Cards endPoint="/form" header="Open Multi Step Form" />
        <Cards endPoint="/pagination" header="Open Pagination" />
      </div>
    </div>
  );
}
export default Home;
