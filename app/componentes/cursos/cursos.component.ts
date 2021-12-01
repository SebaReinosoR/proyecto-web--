import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/interfaces/Curso';
import {CursosService} from'../../services/cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  ListaCursos=new Array<curso>();
  constructor(private http:CursosService) {
    
  }
  ngOnInit(): void {
      this.http.getCursos().subscribe(datos=>{
             for(let i=0;i<datos.items.length;i++){
                //console.log(datos.items[i]);
                this.ListaCursos.push(datos.items[i]);
                //console.log(this.ListaCursos);
             }
             //console.log(this.ListaCursos);
  
       });
  }

}
