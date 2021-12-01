import {oferta} from './Oferta';
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

const getOferta= (req:any, res:any) => {
    let ListaOfertas=new Array<oferta>();
    pool.query(`SELECT * FROM "ofertas"`,(err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            ListaOfertas.push(row);
        }
        //console.log(ListaModulos);
        res.send(JSON.stringify({"status":"ok","items":ListaOfertas}));
        //client.end();
        
})
}

module.exports={
    getOferta
}