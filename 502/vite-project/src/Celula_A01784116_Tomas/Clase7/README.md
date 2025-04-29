# Clase7 WebSocket Server

Este pequeño proyecto monta un **servidor WebSocket** en Node.js (TypeScript) y se integra con tu aplicación React para enviar y recibir mensajes en tiempo real.

## 📁 Estructura del proyecto

```
/src
  /Celula_A01784116_Tomas
    package.json           ← raíz (monorepo con npm workspaces)
    /node_modules
    /Clase7
      /server
        package.json       ← servidor WS
        tsconfig.jso
        /src
          index.ts         ← código del servidor
    …                      ← resto de tu proyecto React existente
```

## 🔧 Prerrequisitos

- **Node.js** v16+
- **npm** v8+
- Puerto **8080** libre en tu máquina

## 🚀 Instalación

1. Abre una terminal y sitúate en la carpeta raíz del monorepo:

   ```bash
   cd src/Celula_A01784116_Tomas
   ```

2. Instala todas las dependencias (servidor y tu proyecto React):

   ```bash
   npm install
   ```

   Esto creará un único `node_modules` en la raíz y hará “hoisting” de las dependencias de `Clase7/server`.

## ▶️ Desarrollo

### Levantar el servidor WebSocket

En la raíz del proyecto ejecuta:

```bash
npm run dev:server
```

- Esto ejecuta el script definido en `Clase7/server/package.json`:
  ```bash
  ts-node-dev src/index.ts
  ```
- Verás en consola:
  ```
  🚀 WebSocket server running on ws://localhost:8080
  ⚡ New client connected
  📥 Received: …
  ❌ Client disconnected
  ```

Con el mismo proyecto de React, en la Clase 7 se verá el funcionamiento.

## 📝 Notas

- El servidor **no** guarda mensajes en disco; todo queda en memoria hasta que recargues la página.
- El puerto y la URL (`ws://localhost:8080`) se pueden cambiar en `server/src/index.ts`.
