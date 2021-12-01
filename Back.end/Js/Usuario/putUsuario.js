"use strict";
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
var putUsuario = function (req, res) {
    var id = req.params.id;
    pool.query("update \"usuario\" set nombre=$1 , rut=$2 where id=$3", [req.body.nombre, req.body.rut, id], function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            //console.log(id);
            //console.log(respuesta.rows[0].id);
            //res.send('Modificado con existo usuario' , respuesta.rows[0]);
        }
    });
};
module.exports = {
    putUsuario: putUsuario
};
