/* global __dirname, process */

var express = require('express');
var path = require('path');
var app = express();

//middleware de acceso a páginas Web estaticas
// -> root = directorio 'public'
// -> __dirname: nombre del directorio de ejecucion
var directorio = path.join(__dirname, '../');

app.use(express.static(directorio));
app.listen(8000);
console.log("Se ha iniciado el servidor en el puerto 8000");