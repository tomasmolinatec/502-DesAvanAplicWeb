import React, { useEffect, useRef, useState } from "react";

interface Notification {
  id: number;
  text: string;
}

const Clase7: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [input, setInput] = useState("");
  const ws = useRef<WebSocket>();

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      console.log("✅ WS connected");
    };

    ws.current.onmessage = (event) => {
      let text: string;
      try {
        const data = JSON.parse(event.data);
        text = data.message ?? event.data;
      } catch {
        text = event.data;
      }
      setNotifications((prev) => [...prev, { id: prev.length, text }]);
    };

    ws.current.onclose = () => {
      console.log("🛑 WS disconnected");
    };

    ws.current.onerror = (err) => {
      console.error("⚠️ WS error", err);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current?.readyState === WebSocket.OPEN && input.trim()) {
      ws.current.send(JSON.stringify({ type: "chat", message: input }));
      setInput("");
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Clase7 — Notificaciones en Tiempo Real con un WebSocket</h2>

      {/* Form para enviar */}
      <div style={{ margin: "1rem 0" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe algo…"
          style={{ padding: "0.5rem", width: "60%" }}
        />
        <button
          onClick={sendMessage}
          disabled={ws.current?.readyState !== WebSocket.OPEN}
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Enviar
        </button>
      </div>

      {notifications.length === 0 ? (
        <p>No hay notificaciones aún.</p>
      ) : (
        <ul>
          {notifications.map((n) => (
            <li key={n.id}>{n.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clase7;
