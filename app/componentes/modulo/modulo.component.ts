import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { modulo } from 'src/app/interfaces/modulo';
import {ModulosService} from'../../services/modulos.service'


@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {
  ListaModulos=new Array<modulo>();
  id:any;
  //aux:any;
  constructor(private http:ModulosService ,private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
      console.log(this.id);
      //this.aux=this.id;
    })
  }
  //aux:number=+this.id;
  ngOnInit(): void {
    this.http.getModulos(this.id).subscribe(datos=>{
      for(let i=0;i<datos.items.length;i++){
         //console.log(datos.items[i]);
         this.ListaModulos.push(datos.items[i]);
         //console.log(this.ListaModulos);
      }
      //console.log(this.ListaModulos);

});
  }


}
