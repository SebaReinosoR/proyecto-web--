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
var getCursos = function (req, res) {
    var ListaCurso = new Array();
    pool.query("SELECT * FROM \"cursos\"", function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaCurso.push(row);
        }
        //console.log(ListaCurso);
        res.send(JSON.stringify({ "status": "ok", "items": ListaCurso }));
        //client.end();
    });
};
module.exports = {
    getCursos: getCursos
};
