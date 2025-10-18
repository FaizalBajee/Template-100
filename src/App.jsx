import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormStep from "./components/FormStep/FormStep";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormStep />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
