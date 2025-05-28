import WebSocket, { WebSocketServer } from "ws";

// Listen on port 3001 and only on the /ws path:
export const wss = new WebSocketServer({
  port: 3001,
  path: "/ws",
});

wss.on("connection", (ws) => {
  console.log("⚡ New client connected");

  // Send a welcome message immediately
  ws.send(
    JSON.stringify({
      type: "info",
      message: "¡Bienvenido a Clase7 WebSocket!",
    })
  );

  // Every 10 seconds send a ping
  const timer = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: "ping",
          message:
            "Han pasado 10 segundos: " +
            new Date().toLocaleTimeString() +
            " 🕒",
        })
      );
    }
  }, 10000);

  // Broadcast any received chat message
  ws.on("message", (data) => {
    const message = data.toString();
    console.log(`📥 Received: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    clearInterval(timer);
    console.log("❌ Client disconnected");
  });
});

console.log("🚀 WebSocket server running on ws://localhost:3001/ws");
