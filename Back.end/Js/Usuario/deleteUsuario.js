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
var deleteUsuario = function (req, res) {
    var id = req.params.id;
    pool.query("Delete From \"usuario\" where usuario.id=$1", [id], function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            //console.log(id);
            //console.log(respuesta.rows[0].id);
            //res.send('Eliminado con existo usuario' ,respuesta.rows[0]);
        }
    });
};
module.exports = {
    deleteUsuario: deleteUsuario
};
