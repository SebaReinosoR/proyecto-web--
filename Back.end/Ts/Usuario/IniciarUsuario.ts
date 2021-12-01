import {usuario} from './usuario';
require('dotenv').config();
//CONEXION A LA DB
const Pool=require('pg').Pool;
const pool = new Pool({
    user: process.env.USUARIO,
    host: process.env.LOCALHOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});
console.log(process.env.DB_USER);

const IniciarUsuario= (req:any, res:any) => {
    //let ListaUsuarios=new Array<usuario>();
    let mail=req.params.mail;
    let password=req.params.password;
    pool.query(`select count(email) from "usuarios" where email=$1 and password=$2`,[mail,password] ,(err:any, respuesta:any) => {
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

})
}

module.exports={
    IniciarUsuario
}