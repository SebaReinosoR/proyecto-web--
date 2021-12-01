import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {UsuariosService} from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {


  mail:any;
  password:any;
  IniciarSesion = new FormGroup({});
  constructor(private FormBuilder: FormBuilder ,private http:UsuariosService , public router: Router) {
  }

  ngOnInit(): void {
    this.IniciarSesion=this.FormBuilder.group({
      mail: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }
  Iniciar(){
    this.http.IniciarUsuario(this.mail,this.password).subscribe(datos=>{
      if(datos[0].count=='0'){
        //console.log('Usuario no encontrado');
        alert('Correo o contraseña incorrecta');
      }else{
        //console.log('Usuario encontrado');
        this.router.navigate(['perfil']);
      }
 });}

}
