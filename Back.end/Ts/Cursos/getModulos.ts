import {modulo} from './Modulo';
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

const getModulo= (req:any, res:any) => {
    let ListaModulos=new Array<modulo>();
    let id=req.params.id;
    pool.query(`SELECT * FROM "modulos" WHERE id_curso=$1`,[id], (err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            ListaModulos.push(row);
        }
        //console.log(ListaModulos);
        res.send(JSON.stringify({"status":"ok","items":ListaModulos}));
        //client.end();
        
})
}

module.exports={
    getModulo
}