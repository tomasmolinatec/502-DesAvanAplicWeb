import React, { useState } from "react";

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
            <ul>
                <li>
                    <a href="/src/class2/A01781321/login,jsx">Ir al login de class2</a>
                </li>
                <li>
                    <a href="#class1-placeholder">
                        Ir al código de class1 (placeholder)
                    </a>
                </li>
            </ul>
        </div>
    );
}

export { Login2, Dashboard };