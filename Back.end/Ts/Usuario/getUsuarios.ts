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

const GetUsuarios= (req:any, res:any) => {
    let ListaUsuarios=new Array<usuario>();
    pool.query(`SELECT * FROM "usuario"`, (err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            ListaUsuarios.push(row);
        }
        //console.log(ListaUsuarios);
        res.send(JSON.stringify({"status":"ok","items":ListaUsuarios}));
        //client.end();
        
})
}

module.exports={
    GetUsuarios
}