// src/Celula_A01784116_Tomas/Clase7/App.tsx
import React from "react";
import { Link } from "react-router-dom";
import RealTimeNotifications from "./components/clase7";

const Clase7Page: React.FC = () => (
  <div style={{ padding: 16 }}>
    <RealTimeNotifications />
    <Link to="/" className="menu-button">
      Volver al Menú
    </Link>
  </div>
);

export default Clase7Page;
