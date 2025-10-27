import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormStep from "./components/FormStep/FormStep";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import routerPath from "../src/routingPath.json";
import SideBar from "./components/SIdeBar/SideBar";
import MultiTabs from "./components/multiTabs/MultiTabs";
import Pagination from "./components/pagination/Pagination";
import "./App.css";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routerPath.form} element={<FormStep />} />
        <Route path={routerPath.progress} element={<ProgressBar />} />
        <Route path={routerPath.sideBar} element={<SideBar />} />
        <Route path={routerPath.multiTabs} element={<MultiTabs />} />
        <Route path={routerPath.pagination} element={<Pagination />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
