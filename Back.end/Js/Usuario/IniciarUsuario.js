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
var IniciarUsuario = function (req, res) {
    //let ListaUsuarios=new Array<usuario>();
    var mail = req.params.mail;
    var password = req.params.password;
    pool.query("select count(email) from \"usuarios\" where email=$1 and password=$2", [mail, password], function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        //for (let row of respuesta.rows) {
        // ListaUsuarios.push(row);
        //}
        res.send(respuesta.rows);
        //console.log(ListaUsuarios);
        //es.send({ListaUsuarios});
        //client.end();
    });
};
module.exports = {
    IniciarUsuario: IniciarUsuario
};
