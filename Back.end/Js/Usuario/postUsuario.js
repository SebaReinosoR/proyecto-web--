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
    pool.query("INSERT INTO \"usuarios\" (nombres,apellidos,rut,password,email,telefono,pais,ciudad,permiso) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *", [req.body.nombre, req.body.apellido, req.body.rut, req.body.password, req.body.mail, req.body.telefono, req.body.pais, req.body.ciudad, 1], function (err, respuesta) {
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
