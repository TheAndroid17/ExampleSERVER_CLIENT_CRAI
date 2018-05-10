'use strict'
var clsper = require('./Controller/ClsPersona.js')
var clslib = require('./Controller/ClsLibro.js')
var clspres = require('./Controller/ClsPrestamo.js')
var cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3010

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, PUT, DELETE, POST, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//datos de la persona.
app.get('/api/persona', clsper.readPersona);
app.get('/api/persona/:id_persona', clsper.findOnePersona );
app.post('/api/persona', clsper.createPersona);
app.put('/api/persona/:id_persona', clsper.updatePersona);
app.delete('/api/persona/:id_persona', clsper.deletePersona);

//datos de libros.
app.get('/api/libro', clslib.readLibro);
app.get('/api/libro/:id_libro', clslib.findOneLibro );
app.post('/api/libro', clslib.createLibro);
app.put('/api/libro/:id_libro', clslib.updateLibro);
app.delete('/api/libro/:id_libro', clslib.deleteLibro);

//datos de prestamos.
app.get('/api/prestamo', clspres.readPrestamo);
app.get('/api/prestamo/:id_persona', clspres.findOnePrestamo);
app.post('/api/prestamo', clspres.createPrestamo);
app.put('/api/prestamo/:id_prestamo', clspres.updatePrestamo);
app.delete('/api/prestamo/:id_prestamo', clspres.deletePrestamo);

app.listen(port, () => {
  console.log(`CRAI API corriendo en http://localhost:${port}`)
} )
