import {curso} from './Curso';
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

const getCursos= (req:any, res:any) => {
    let ListaCurso=new Array<curso>();
    pool.query(`SELECT * FROM "cursos"`, (err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            ListaCurso.push(row);
        }
        //console.log(ListaCurso);
        res.send(JSON.stringify({"status":"ok","items":ListaCurso}));
        //client.end();
        
})
}

module.exports={
    getCursos
}