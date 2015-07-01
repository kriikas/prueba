/* global __dirname */

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/preguntas', function (req, res){
    res.sendFile(path.resolve(__dirname+'/../ejercicios_obligatorios/modulo4/index.html'));
});

app.get('/respuesta', function (req, res, next){
    var respuestasCorrectas = new Array();
    respuestasCorrectas["1"] = "Cristobal Colon";
    respuestasCorrectas["2"] = "Lisboa";
    var pregunta = req.query.pregunta;
    var respuesta = req.query.america || req.query.portugal;
    if(respuestasCorrectas[pregunta] === respuesta){
        res.send("pregunta: "+pregunta+" respuesta: "+respuesta);        
    }else{
        res.send("respuesta incorrecta");
    }
    res.send("Volver");
});

app.listen(8000);
console.log('Aplicacion iniciada en el puerto 8000');