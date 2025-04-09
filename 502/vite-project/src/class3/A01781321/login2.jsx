import React, { useState } from "react";
import './styles.css';


function Login2() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "andresoide2000" && password === "test123") {
            setIsLoggedIn(true);
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    if (isLoggedIn) {
        return <Dashboard />;
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ marginBottom: "20px" }}>
                <h2>Navigation</h2>
                <ul>
                    <li>
                        <button onClick={() => (window.location.href = "/src/class2/A01781321/login.jsx")}>
                            Class 2 Login
                        </button>
                    </li>
                    <li>
                        <button onClick={() => (window.location.href = "/src/class1/A01781321/tarea1.html")}>
                            Class 1 Code
                        </button>
                    </li>
                </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <h2>User Info</h2>
                <p>Welcome, andresoide2000!</p>
                <button onClick={() => window.location.reload()}>Log Out</button>
            </div>
        </div>
    );
}

export { Login2, Dashboard };