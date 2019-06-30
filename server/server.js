const express = require("express");
const socketIO = require("socket.io");

// permite levantar un servidor, etc
const http = require("http");

const path = require("path");

const app = express();

// definir el servidor para correr la aplicacion
// como express esta basado en http podemos enviarle la app de express
let server = http.createServer(app);

// para compartir y hacer puiblico la carpeta public
const publicPath = path.resolve(__dirname, "../public");

const port = process.env.PORT || 3000;

// habilitar la carpeta publica y que todo el mundo pueda acceder a ella
app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
// let io = socketIO(server);
module.exports.io = socketIO(server);
require("./sockets/socket");

// para saber cuando un usuario se conecta al server
// client -> tiene toda la informacion del pc con el que se conecta el usuario o de la conexion que se utilizo

// mensaje en consola que el servidor está corriendo en el puerto PORT
server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
