import { Component, OnInit } from '@angular/core';
import { oferta } from 'src/app/interfaces/ofertas';
import { OfertasService } from 'src/app/services/ofertas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.scss']
})
export class EmpleoComponent implements OnInit {
  ListaOfertas=new Array<oferta>();
  //datos:any;
  constructor(private http:OfertasService , private http2:UsuariosService ) {
    
  }
  ngOnInit(): void {
      this.http.getOfertas().subscribe(datos=>{
             for(let i=0;i<datos.items.length;i++){
                //console.log(datos.items[i]);
                this.ListaOfertas.push(datos.items[i]);
                //console.log(this.ListaCursos);
             }
       });
       //this.http2.getUsuarios().subscribe(datos=>){

      // }
  }

}
