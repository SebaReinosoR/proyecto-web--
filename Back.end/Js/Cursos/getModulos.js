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
var getModulo = function (req, res) {
    var ListaModulos = new Array();
    var id = req.params.id;
    pool.query("SELECT * FROM \"modulos\" WHERE id_curso=$1", [id], function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaModulos.push(row);
        }
        //console.log(ListaModulos);
        res.send(JSON.stringify({ "status": "ok", "items": ListaModulos }));
        //client.end();
    });
};
module.exports = {
    getModulo: getModulo
};
