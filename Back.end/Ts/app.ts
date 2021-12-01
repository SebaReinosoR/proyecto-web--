const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const UsuariosLista=require('./Usuario/getUsuarios');
const Insertar=require('./Usuario/postUsuario');
const Eliminar=require('./Usuario/deleteUsuario');
const Modificar=require('./Usuario/putUsuario');
const Iniciar=require('./Usuario/IniciarUsuario');
const CursosLista=require('./Cursos/getCursos');
const ModulosLista=require('./Cursos/getModulos');
const OfertasLista=require('./Cursos/GetOfertas');
//let id : any;

const configuracion={
    hostname: "127.0.0.1",
    port: 3001,
}
//https://node-postgres.com/
app.use(cors());
// create application/json parser
app.use(bodyParser.json());

//USUARIO
app.get('/Usuarios',UsuariosLista.GetUsuarios);
app.post('/AgregarUsuario',bodyParser.json(),Insertar.postUsuario);
app.delete('/EliminarUsuario/:id',Eliminar.deleteUsuario);
app.put('/ModificarUsuario/:id',bodyParser.json(),Modificar.putUsuario);
app.get('/Usuario/:mail/:password',Iniciar.IniciarUsuario);
//CURSOS
app.get('/Cursos',CursosLista.getCursos);
//app.post('/AgregarUsuario',bodyParser.json(),Insertar.postUsuario);
//app.delete('/EliminarUsuario/:id',Eliminar.deleteUsuario);
//app.put('/ModificarUsuario/:id',bodyParser.json(),Modificar.putUsuario);
//EMPLEOS
app.get('/Ofertas',OfertasLista.getOferta);
app.get('/Ofertas/:id',OfertasLista.getOferta);
//Modulos
app.get('/Modulos/:id',ModulosLista.getModulo);
//CU

  app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`)
  })
  