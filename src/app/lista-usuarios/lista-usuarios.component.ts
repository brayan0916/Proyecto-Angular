import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

usuarios:Usuario[];

  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUusuarios();
  }

  private obtenerUusuarios(){
    this.usuarioServicio.obtenerListausuarios().subscribe
    (dato => {
      this.usuarios = dato;
     
     console.log(dato)
     });

}
}