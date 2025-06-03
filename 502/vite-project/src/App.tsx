import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Vite + React</h1>
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Link to="/menu" className="menu-link">
        A01784116 Clases Tomas Molina
      </Link>
    </div>
  );
}

export default App;
