import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormStep from "./components/FormStep/FormStep";
import ProgressBar from "./components/ProgressBar/ProgressBar";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormStep />} />
        <Route path="/progress" element={<ProgressBar />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
