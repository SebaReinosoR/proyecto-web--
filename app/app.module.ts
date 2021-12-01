import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/./header/header.component';
import { InicioSesionComponent } from './componentes/./inicio-sesion/inicio-sesion.component';
import { PerfilComponent } from './componentes/./perfil/perfil.component';
import { CertificadosComponent } from './componentes/./certificados/certificados.component';
import { CursosComponent } from './componentes/./cursos/cursos.component';
import { EmpleoComponent } from './componentes/./empleo/empleo.component';
import { NotificacionComponent } from './componentes/./notificacion/notificacion.component';
import { RegistroComponent } from './componentes/./registro/registro.component';
import { ModuloComponent } from './componentes/modulo/modulo.component';
import { ClaseComponent } from './componentes/clase/clase.component';
import { DocumentoCertificadoComponent } from './componentes/documento-certificado/documento-certificado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { BEmprendimientoComponent } from './componentes/b-emprendimiento/b-emprendimiento.component';
import { SoftMercadoComponent } from './componentes/soft-mercado/soft-mercado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioSesionComponent,
    PerfilComponent,
    CertificadosComponent,
    CursosComponent,
    EmpleoComponent,
    NotificacionComponent,
    RegistroComponent,
    ModuloComponent,
    ClaseComponent,
    DocumentoCertificadoComponent,
    ForoComponent,
    ExpLaboralComponent,
    BEmprendimientoComponent,
    SoftMercadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
