import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface LoginComponentProps {
  onLoginSuccess: () => void;
}

const LoginComponent = ({ onLoginSuccess }: LoginComponentProps) => {
  // Credenciales estáticas de prueba:
  // Username: admin
  // Password: admin123
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "admin" && password === "admin123") {
      onLoginSuccess();
    } else {
      alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login (y trabajo de Clase2)</h1>
      <p>
        <strong>Credenciales estáticas:</strong> Username: <em>admin</em>,
        Password: <em>admin123</em>
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:{" "}
            <Input
              type="text"
              placeholder="Ingresa el nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:{" "}
            <Input
              type="password"
              placeholder="Ingresa la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <Button type="submit" text="Login" />
      </form>
      <br />
      <a href="/">Regresar al incio</a>
    </div>
  );
};

export default LoginComponent;
