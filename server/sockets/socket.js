const { io } = require("../server");

io.on("connection", client => {
  console.log("Usuario conectado");

  // para enviar un mensaje cuando se conecta el cliente
  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido a esta aplicación"
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Escuchar el cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "Todo salió bien!"
    //   });
    // } else {
    //   callback({
    //     resp: "Todo salió MAL!"
    //   });
    // }
    // broadcast -> enviamos la informacion a todos los usuarios de la aplicacion
    client.broadcast.emit("enviarMensaje", data);
  });
});
