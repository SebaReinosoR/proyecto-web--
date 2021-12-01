import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //tomar el cant. de elementos y meterlos en una funcion que cree li
}


function arreglo(id:any){
    let ul:any=document.getElementById("listacursosTerminados");
    id=3
    for(let i:number=0;i<id;i++){
      let li:any= document.createElement("li");
      let p:any=document.createElement("p");
      let boton:any=document.createElement("button")
        ul.appendChild(li).innerHTML=
        "<img src='../../../assets/2.png' alt=''><p>Curso de programacion</p><button class='btn btn-primary' type=submit' [routerLink]='['/certificado']' routerLinkActive='router-link-active' >Certificado</button>";
        ul.appendChild(p).textContent="Curso de programacion";
        ul.appendChild(boton).textContent="Certificado";
    }
}
window.addEventListener("load",arreglo);