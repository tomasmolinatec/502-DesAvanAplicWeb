import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Details from "../EjemploClase/Details";

export default function CelulaRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* ruta principal */}
        <Route path="/" element={<Menu />} />
        {/* segunda pantalla */}
        <Route path="EjemploClase" element={<Details />} />
        {/* cualquier otra ruta, vuelve al menú */}
        <Route path="*" element={<Menu />} />
      </Routes>
    </HashRouter>
  );
}
