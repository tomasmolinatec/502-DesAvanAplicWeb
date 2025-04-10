import { useState, useEffect } from "react";

const Clase1 = () => {
  // Función "antes"
  function greetBefore(user: { name: string; age: number }) {
    return "Hola, " + user.name + "! Tienes " + user.age + " años.";
  }

  // Función "después" usando template literals, destructuring y arrow function
  const greetAfter = ({ name, age }: { name: string; age: number }) =>
    `Hola, ${name}! Tienes ${age} años.`;

  const [name, setName] = useState<string>("Juan");
  const [age, setAge] = useState<number>(25);
  const [apiData, setApiData] = useState<any>(null);

  const user = { name, age };

  // Se utiliza useEffect para obtener datos de la API simulada al montar el componente
  useEffect(() => {
    const fetchMockData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/123"
        );
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(`Error al obtener los datos: ${error}`);
      }
    };

    fetchMockData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Actividad Práctica: Refactorizar código usando ES6+</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Nombre:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Edad:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
      </div>

      <h2>Antes</h2>
      <pre>
        {`function greet(user) {
  return "Hola, " + user.name + "! Tienes " + user.age + " años.";
}`}
      </pre>
      <p>
        <strong>Resultado:</strong> {greetBefore(user)}
      </p>

      <h2>
        Después (usando template literals + destructuring + arrow functions)
      </h2>
      <pre>
        {`const greet = ({ name, age }) => \`Hola, \${name}! Tienes \${age} años.\`;`}
      </pre>
      <p>
        <strong>Resultado:</strong> {greetAfter(user)}
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Datos obtenidos de la API de mock utilizando fetch:</h2>
        {apiData ? (
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
      <button
        onClick={() => {
          window.location.href = "/src/class1/A01782146/explorador/index.html";
        }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Regresar al menú
      </button>
    </div>
  );
};

export default Clase1;
