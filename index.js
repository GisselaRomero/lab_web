const express = require('express')
const app = express()
const routes = require('./rutas.js')
const path = require('path') // Importa el módulo 'path' para manejar rutas de archivos.
const port = 3000

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'static')))

app.use(routes)

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
