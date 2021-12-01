"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
//CONEXION A LA DB
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.USUARIO,
    host: process.env.LOCALHOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});
console.log(process.env.DB_USER);
var GetUsuarios = function (req, res) {
    var ListaUsuarios = new Array();
    pool.query("SELECT * FROM \"usuario\"", function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaUsuarios.push(row);
        }
        console.log(ListaUsuarios);
        res.send(JSON.stringify({ "status": "ok", "items": ListaUsuarios }));
        //client.end();
    });
};
module.exports = {
    GetUsuarios: GetUsuarios
};
