// src/Celula_A01784116_Tomas/Clase4/Clase4.tsx
import React, { useEffect, useReducer, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import TravelFetcher from "./TravelFetcher";
import TravelRequestList from "./TravelRequestLists";
import ReturnButton from "../components/ReturnButton";

/* ---------- 1. Tipos ---------- */
type State = {
  username: string;
  password: string;
  loading: boolean;
  error: string;
  data: null | { user: string };
};

type Action =
  | { type: "UPDATE_FIELD"; field: keyof State; value: string }
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: { user: string } }
  | { type: "LOGIN_ERROR" };

const initialState: State = {
  username: "",
  password: "",
  loading: false,
  error: "",
  data: null,
};

/* ---------- 2. Reducer ---------- */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "LOGIN_START":
      return { ...state, loading: true, error: "" };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: "Login failed" };
    default:
      return state;
  }
};

/* ---------- 3. Higher-Order Component sin errores ---------- */
function withLogging<P>(
  WrappedComponent: React.JSXElementConstructor<P>
): React.FC<P> {
  const ComponentWithLogging: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(
        `📋 [LOG] Componente ${
          (WrappedComponent as any).displayName ||
          (WrappedComponent as any).name ||
          "Component"
        } montado`
      );
    }, []);

    return <WrappedComponent {...(props as P & React.Attributes)} />;
  };

  ComponentWithLogging.displayName = `withLogging(${
    (WrappedComponent as any).displayName ||
    (WrappedComponent as any).name ||
    "Component"
  })`;

  return ComponentWithLogging;
}

/* ---------- 4. Componente simple ---------- */
const Mensaje: React.FC = () => (
  <p>Este es un componente simple con logging automático.</p>
);

/* ---------- 5. Componente con HOC aplicado ---------- */
const MensajeConLogging = withLogging(Mensaje);

/* ---------- 6. Componente principal ---------- */
const Login: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (state.username === "admin" && state.password === "1234") {
        dispatch({ type: "LOGIN_SUCCESS", payload: { user: "admin" } });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.placeholder.toLowerCase() as keyof State,
      value: e.target.value,
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => console.log("Fetched user:", data));
  }, []);

  return (
    <div>
      <ReturnButton />
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.data && <p>Welcome {state.data.user}!</p>}

      {/* Componente envuelto con logging */}
      <MensajeConLogging />

      {/* Lista de solicitudes de viaje */}
      <TravelRequestList />

      {/* Render Props para solicitudes de viaje */}
      <TravelFetcher
        render={(data) => (
          <div style={{ marginTop: "2rem" }}>
            <h2>Travel Requests (Render Props)</h2>
            <ul>
              {data.map((req) => (
                <li key={req.id}>
                  ✈️ {req.destination} - {req.reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
};

export default Login;
