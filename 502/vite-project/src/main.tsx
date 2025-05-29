import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import Menu from "./Celula_A01784116_Tomas/menu/Menu";
import Clase1 from "./class1/A01784116/actividad/Clase1";
import Clase2 from "./class2/A01784116/LoginForm";
import Clase3 from "./class3/A01784116/TravelRequestForm";
import Clase4 from "./Celula_A01784116_Tomas/Clase4/Clase4";
import Clase5 from "./Celula_A01784116_Tomas/Clase5/clase5";
import Clase6 from "./Celula_A01784116_Tomas/Clase6/App";
import Clase7 from "./Celula_A01784116_Tomas/Clase7/components/clase7";
import { UserProvider } from "./Celula_A01784116_Tomas/Clase6/UserContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Clase1" element={<Clase1 />} />
          <Route path="/Clase2" element={<Clase2 />} />
          <Route path="/Clase3" element={<Clase3 />} />
          <Route path="/Clase4" element={<Clase4 />} />
          <Route path="/Clase5" element={<Clase5 />} />
          <Route path="/Clase6/*" element={<Clase6 />} />
          <Route path="/Clase7" element={<Clase7 />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
