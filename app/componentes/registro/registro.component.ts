import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {UsuariosService} from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  id: number=0;
  constructor(private FormBuilder: FormBuilder ,private http:UsuariosService , public router: Router) {
  }
  nombre:any;
  rut:any;
  telefono:any;
  mail:any;
  apellido:any;
  password:any;
  ciudad:any;
  pais:any;
  Agregar = new FormGroup({});
  

  ngOnInit(): void {
    this.Agregar=this.FormBuilder.group({
      nombre: new FormControl('',Validators.required),
      rut: new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      mail: new FormControl('',Validators.required),
      ciudad: new FormControl('',Validators.required),
      pais: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }
  Insetar(){
    this.http.postUsuario(this.nombre,this.apellido,this.rut,this.password,this.mail,this.telefono,this.pais,this.ciudad).subscribe(datos=>{
      console.log(datos);
      if (datos.status=='ok'){
        this.router.navigate(['perfil']);
      }
      //console.log(datos.status);
 })
  }
  Actualizar(){
    this.http.getUsuarios().subscribe(datos=>{
      console.log(datos);
 });}
  Eliminar(){
    this.http.deleteUsuario(this.rut).subscribe(datos=>{
      console.log(datos);
 });
  }
  Modificar(){
    this.http.putUsuario(this.rut,this.nombre).subscribe(datos=>{
      console.log(datos);
 });
  }
  Iniciar(){
    this.http.IniciarUsuario(this.mail,this.password).subscribe(datos=>{
      if(datos[0].count=='0'){
        console.log('Usuario no encontrado');
      }else{
        console.log('Usuario encontrado');
        this.router.navigate(['perfil']);
      }
 });
    
    //if (this.http.IniciarUsuario(this.rut)==NULL)
  }

}
