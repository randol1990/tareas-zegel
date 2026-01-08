const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola, Node.js con NPM')
})

app.listen(port, () => {
    console.log('El servidor está escuchando en el puesto 3000 ...')
})