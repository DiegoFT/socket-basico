var socket = io();

// on -> escuchar
socket.on("connect", function() {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
  console.log("Perdimos conexion con el servidor");
});

// emit -> enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Diego",
    mensaje: "Hola Mundo"
  },
  function(resp) {
    console.log("Respuesta server: ", resp);
  }
);

// Escuchar información
socket.on("enviarMensaje", function(mensaje) {
  console.log("Servidor: ", mensaje);
});
