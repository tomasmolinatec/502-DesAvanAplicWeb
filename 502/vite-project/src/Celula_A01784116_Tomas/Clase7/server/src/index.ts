import WebSocket, { WebSocketServer } from "ws";

export const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("⚡ New client connected");

  ws.send(
    JSON.stringify({
      type: "info",
      message: "¡Bienvenido a Clase7 WebSocket!",
    })
  );

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

  ws.on("message", (data) => {
    const message = data.toString();
    console.log(`📥 Received: ${message}`);
    wss.clients.forEach(
      (client) => client.readyState === WebSocket.OPEN && client.send(message)
    );
  });

  ws.on("close", () => {
    clearInterval(timer);
    console.log("❌ Client disconnected");
  });
});

console.log("🚀 WebSocket server running on ws://localhost:8080");
