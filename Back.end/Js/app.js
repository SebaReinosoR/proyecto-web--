"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var UsuariosLista = require('./Usuario/getUsuarios');
var Insertar = require('./Usuario/postUsuario');
var Eliminar = require('./Usuario/deleteUsuario');
var Modificar = require('./Usuario/putUsuario');
var Iniciar = require('./Usuario/IniciarUsuario');
var CursosLista = require('./Cursos/getCursos');
var ModulosLista = require('./Cursos/getModulos');
var OfertasLista = require('./Cursos/GetOfertas');
//let id : any;
var configuracion = {
    hostname: "127.0.0.1",
    port: 3001,
};
//https://node-postgres.com/
app.use(cors());
// create application/json parser
app.use(bodyParser.json());
//USUARIO
app.get('/Usuarios', UsuariosLista.GetUsuarios);
app.post('/AgregarUsuario', bodyParser.json(), Insertar.postUsuario);
app.delete('/EliminarUsuario/:id', Eliminar.deleteUsuario);
app.put('/ModificarUsuario/:id', bodyParser.json(), Modificar.putUsuario);
app.get('/Usuario/:mail/:password', Iniciar.IniciarUsuario);
//CURSOS
app.get('/Cursos', CursosLista.getCursos);
//app.post('/AgregarUsuario',bodyParser.json(),Insertar.postUsuario);
//app.delete('/EliminarUsuario/:id',Eliminar.deleteUsuario);
//app.put('/ModificarUsuario/:id',bodyParser.json(),Modificar.putUsuario);
//EMPLEOS
app.get('/Ofertas', OfertasLista.getOferta);
app.get('/Ofertas/:id', OfertasLista.getOferta);
//Modulos
app.get('/Modulos/:id', ModulosLista.getModulo);
//CU
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
