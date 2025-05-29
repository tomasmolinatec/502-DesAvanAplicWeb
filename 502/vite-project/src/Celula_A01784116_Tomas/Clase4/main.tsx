import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Clase4 from "../Clase4/Clase4";
import Counter from "../Clase4/Counter";
import TravelForm from "../Clase4/TravelForm";
import "./style.css";

const MainApp = () => (
  <StrictMode>
    <Clase4 />
    <Counter />
    <TravelForm />
  </StrictMode>
);

createRoot(document.getElementById("root")!).render(<MainApp />);

export default MainApp;
