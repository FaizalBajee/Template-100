import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormStep from "./components/FormStep/FormStep";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import routerPath from "../src/routingPath.json";
import SideBar from "./components/SIdeBar/SideBar";
import MultiTabs from "./components/multiTabs/MultiTabs";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routerPath.form} element={<FormStep />} />
        <Route path={routerPath.progress} element={<ProgressBar />} />
        <Route path={routerPath.sideBar} element={<SideBar />} />
        <Route path={routerPath.multiTabs} element={<MultiTabs />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
