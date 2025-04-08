import { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <h1>Login para acceso a las tareas</h1>
      <h3>ctrl + a para ver tus credenciales</h3>
      <div className='credenciales'>
        <p>Usuario = ivan</p>
        <p>Contraseña = admin</p>
      </div>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <TaskMenu />
      )}
    </div>
  );
}

function TaskMenu() {
  return (
    <div className="menu">
      <h2>Bienvenido, Ivan</h2>
      <ul>
        <li><a href="/src/class1/A01784008/index.html">Clase 1: ES6+</a></li>
        <li><a href="/src/class2/A01784008/index.html">Clase 2: Login</a></li>
      </ul>
    </div>
  );
}
