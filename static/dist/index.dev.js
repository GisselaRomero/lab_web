"use strict";

var express = require('express');

var app = express();

var routes = require('./rutas.js');

var port = 3000;
app.use(routes);
app.listen(port, function () {
  console.log('Server on port ${3000}');
});
//# sourceMappingURL=index.dev.js.map
