import React, { useEffect, useRef, useState } from "react";
import ReturnButton from "../../components/ReturnButton";

interface Notification {
  id: number;
  text: string;
}

const RealTimeNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [input, setInput] = useState("");
  const ws = useRef<WebSocket>();

  useEffect(() => {
    // Conéctate SIEMPRE vía NGINX: mismo host/puerto + /ws/
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const socketUrl = `${protocol}://${window.location.host}/ws`;

    ws.current = new WebSocket(socketUrl);

    ws.current.onopen = () => console.log("✅ WS connected", socketUrl);

    ws.current.onmessage = (e) => {
      let text: string;
      try {
        const data = JSON.parse(e.data);
        text = data.message ?? e.data;
      } catch {
        text = e.data;
      }
      setNotifications((prev) => [...prev, { id: prev.length, text }]);
    };

    ws.current.onclose = () => console.log("🛑 WS disconnected");
    ws.current.onerror = (err) => console.error("⚠️ WS error", err);

    return () => ws.current?.close();
  }, []);

  const send = () => {
    if (ws.current?.readyState === WebSocket.OPEN && input.trim()) {
      ws.current.send(JSON.stringify({ type: "chat", message: input }));
      setInput("");
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <ReturnButton />
      <h2>Clase7 — WebSocket en tiempo real</h2>

      <div style={{ margin: "1rem 0" }}>
        <input
          style={{ padding: "0.5rem", width: "60%" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe algo…"
        />
        <button
          style={{ marginLeft: 8, padding: "0.5rem 1rem" }}
          onClick={send}
          disabled={ws.current?.readyState !== WebSocket.OPEN}
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

export default RealTimeNotifications;
