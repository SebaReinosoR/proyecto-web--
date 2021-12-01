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
var postUsuario = function (req, res) {
    pool.query("INSERT INTO \"usuario\" (nombre,rut) VALUES($1,$2) RETURNING *", [req.body.nombre, req.body.rut], function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log(respuesta.rows[0].id);
            res.send(JSON.stringify({ "status": "ok", "item": respuesta.rows[0].id }));
        }
    });
};
module.exports = {
    postUsuario: postUsuario
};
