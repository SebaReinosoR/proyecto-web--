require('dotenv').config();
//CONEXION A LA DB
const Pool=require('pg').Pool;
const pool= new Pool({
    user: process.env.USUARIO,
    host: process.env.LOCALHOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});
const putUsuario=(req:any, res:any) => {
    let id=req.params.id;
    pool.query(`update "usuario" set nombre=$1 , rut=$2 where id=$3`,[req.body.nombre,req.body.rut,id], (err:any, respuesta:any) => {
        if (err) { 
            console.error(err);
            return;
        }else{
            //console.log(id);
            //console.log(respuesta.rows[0].id);
            //res.send('Modificado con existo usuario' , respuesta.rows[0]);

        }
})
}
module.exports={
    putUsuario
}