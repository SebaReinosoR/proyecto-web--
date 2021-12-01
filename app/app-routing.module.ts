import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BEmprendimientoComponent } from './componentes/b-emprendimiento/b-emprendimiento.component';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import { ClaseComponent } from './componentes/clase/clase.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { DocumentoCertificadoComponent } from './componentes/documento-certificado/documento-certificado.component';
import { EmpleoComponent } from './componentes/empleo/empleo.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ModuloComponent } from './componentes/modulo/modulo.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoftMercadoComponent } from './componentes/soft-mercado/soft-mercado.component';

const routes: Routes = [
  {path:"",component:InicioSesionComponent},
  {path:"registro",component:RegistroComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"cursos",component:CursosComponent},
  {path:"certificados",component:CertificadosComponent},
  {path:"empleo",component:EmpleoComponent},
  {path:"notificacion",component:NotificacionComponent},
  {path:"certificado",component:DocumentoCertificadoComponent},
  {path:"modulo/:id",component:ModuloComponent},
  {path:"clase/:id",component:ClaseComponent},
  {path:"foro",component:ForoComponent},
  {path:"exp-laboral",component:ExpLaboralComponent},
  {path:"b-empren",component:BEmprendimientoComponent},
  {path:"soft",component:SoftMercadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
