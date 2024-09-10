"use strict";

var express = require('express');

var app = express();

var routes = require('./rutas.js');

var path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos.


var port = 3000; // Servir archivos estáticos desde la carpeta 'public'

app.use(express["static"](path.join(__dirname, 'static')));
app.use(routes);
app.listen(port, function () {
  console.log("Server on port ".concat(port));
});
//# sourceMappingURL=index.dev.js.map
