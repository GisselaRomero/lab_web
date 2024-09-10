"use strict";

var router = require('express').Router();

router.get('/about', function (req, res) {
  res.sendFile('./static/about.html', {
    root: __dirname
  });
});
router.get('/contact', function (req, res) {
  res.sendFile('./static/contact.html', {
    root: __dirname
  });
});
router.get('/', function (req, res) {
  res.sendFile('./static/index.html', {
    root: __dirname
  });
});
module.exports = router;
//# sourceMappingURL=rutas.dev.js.map
