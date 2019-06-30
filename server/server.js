const express = require("express");
const path = require("path");

const app = express();

// para compartir y hacer puiblico la carpeta public
const publicPath = path.resolve(__dirname, "../public");

const port = process.env.PORT || 3000;

// habilitar la carpeta publica y que todo el mundo pueda acceder a ella
app.use(express.static(publicPath));

// mensaje en consola que el servidor está corriendo en el puerto PORT
app.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
