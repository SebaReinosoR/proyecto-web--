export{};
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
const deleteUsuario=(req:any, res:any) => {
    let id=req.params.id;
    pool.query(`Delete From "usuario" where usuario.id=$1`,[id], (err:any, respuesta:any) => {
        if (err) { 
            console.error(err);
            return;
        }else{
            //console.log(id);
            //console.log(respuesta.rows[0].id);
            //res.send('Eliminado con existo usuario' ,respuesta.rows[0]);

        }
})
}
module.exports={
    deleteUsuario
}