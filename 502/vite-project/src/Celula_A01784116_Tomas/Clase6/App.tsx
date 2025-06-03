import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AdminPanel from "./AdminPanel";
import NotAuthorized from "./NotAuthorized";
import ProtectedRoute from "./ProtectedRoute";
import ReturnButton from "../components/ReturnButton";

const Clase6: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <ReturnButton />
      <h2>Clase 6 - Rutas Protegidas</h2>
      <div style={{ marginBottom: "20px" }}>
        <h3>Navegación:</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/Clase6/admin" className="menu-button">
            Panel de Admin
          </Link>
          <Link to="/Clase6/employee" className="menu-button">
            Panel de Empleado
          </Link>
        </div>
      </div>

      <UserDashboard />

      <Routes>
        <Route path="not-authorized" element={<NotAuthorized />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              redirectTo="/Clase6/not-authorized"
            >
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="employee"
          element={
            <ProtectedRoute
              allowedRoles={["employee", "manager", "admin"]}
              redirectTo="/Clase6/not-authorized"
            >
              <div>
                <h2>Panel de Empleado</h2>
                <p>
                  Bienvenido al panel de empleado. Aquí puedes ver tus tareas y
                  actividades.
                </p>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <h3>Selecciona una opción del menú superior</h3>
              <p>
                Esta es una demostración de rutas protegidas basadas en roles.
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Clase6;
