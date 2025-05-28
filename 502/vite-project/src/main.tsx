import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App"; // tu página de inicio
import Clase7Page from "./Celula_A01784116_Tomas/Clase7/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Clase7Page />} />
        {/* Otras rutas que uses */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
