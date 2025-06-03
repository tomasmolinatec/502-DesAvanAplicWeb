// src/index.ts
import WebSocket, { WebSocketServer } from "ws";

/* ───────── Servidor en 0.0.0.0:3001 SOLO en la ruta /ws ───────── */
export const wss = new WebSocketServer({
  port: 3001,
  path: "/ws",
});

wss.on("connection", (ws) => {
  console.log("⚡ New client connected");

  // mensaje de bienvenida
  ws.send(
    JSON.stringify({
      type: "info",
      message: "¡Bienvenido a Clase7 WebSocket!",
    })
  );

  // ping cada 10 s
  const timer = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: "ping",
          message:
            "Han pasado 10 s: " + new Date().toLocaleTimeString() + " 🕒",
        })
      );
    }
  }, 10_000);

  // eco a todos los clientes
  ws.on("message", (data) => {
    const msg = data.toString();
    console.log("📥", msg);
    wss.clients.forEach((c) =>
      c.readyState === WebSocket.OPEN ? c.send(msg) : null
    );
  });

  ws.on("close", () => {
    clearInterval(timer);
    console.log("❌ Client disconnected");
  });
});

console.log("🚀 WebSocket server running on ws://localhost:3001/ws");
