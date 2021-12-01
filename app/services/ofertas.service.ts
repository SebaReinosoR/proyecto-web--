import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  
  constructor(private http:HttpClient) {
     
  }
  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  getOfertas():Observable<any>{
    return this.http.get(`${environment.hostname}/Ofertas`);
  }
  postUsuario(nombre:any , apellido:any , rut:any , password:any , mail:any , telefono:any , pais:any , ciudad:any ):Observable<any>{
    return this.http.post(`${environment.hostname}/AgregarUsuario`,JSON.stringify({"nombre":nombre,"apellido":apellido ,"rut":rut , "password":password , "mail":mail, "telefono":telefono , "pais":pais , "ciudad":ciudad}),this.HttpUploadOptions);
  }
  deleteUsuario(rut:any):Observable<any>{
    return this.http.delete(`${environment.hostname}/EliminarUsuario/${rut}`,this.HttpUploadOptions);
  }
  putUsuario(rut:any,nombre:any):Observable<any>{
    return this.http.put(`${environment.hostname}/ModificarUsuario/${rut}`,JSON.stringify({"nombre":nombre,"rut":rut}),this.HttpUploadOptions);
  }
}