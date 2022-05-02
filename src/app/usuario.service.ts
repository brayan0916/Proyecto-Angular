import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL ="https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient : HttpClient) { }


  obtenerListausuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  
  }

   //este metodo nos sirve para registrar un empleado
   registrarUsuario(usuario:Usuario) : Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,usuario);
  }

 //registrarUsuario(usuario:Usuario) {
 //   return this.httpClient.post<Usuario>(this.baseURL,usuario);
 //  }


}
