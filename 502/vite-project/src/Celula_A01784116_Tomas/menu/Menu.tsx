import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menú de Trabajos en Equipo</h1>
      <p>Selecciona una opción:</p>

      {/* Link a la segunda pantalla */}
      <Link to="/EjemploClase" className="menu-button">
        Ver Detalles
      </Link>
    </div>
  );
}
