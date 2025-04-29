import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Details from "../EjemploClase/Details";
import Clase4 from "../Clase4/main.tsx";
import Clase5 from "../Clase5/clase5.tsx";
import Clase6 from "../Clase6/App.tsx";
import Clase7 from "../Clase7/App.tsx";

export default function CelulaRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Menu />} />

        {/* Route for EjemploClase */}
        <Route path="EjemploClase" element={<Details />} />

        {/* Catch-all Route, goes back to Menu */}
        <Route path="*" element={<Menu />} />

        {/* Route for Clase4 */}
        <Route path="Clase4/*" element={<Clase4 />} />

        {/* Route for Clase5 */}
        <Route path="Clase5/*" element={<Clase5 />} />

        {/* Route for Clase6 */}
        <Route path="Clase6/*" element={<Clase6 />} />

        {/* Route for Clase7 */}
        <Route path="Clase7/*" element={<Clase7 />} />

        {/* Add more routes as needed */}
      </Routes>
    </HashRouter>
  );
}
