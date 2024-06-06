import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true
  //definimos la propiedad que guarda la coleccion 
  public usuariolocal: Usuario[]
  //utilizo un constructor para las credenciales correctas 
  constructor() {
    this.usuariolocal = [{
      uid: "", //atributos de tipo any = reciben valores indefinidos 
      nombre: "Julian",
      apellido: "Moscon",
      email: "julianmoscon@gmail.com",
      rol: "visitante",
      password: "1234"
    }]
  }
//###################################################################### fin local
  // IMPORTACION DEL MODELO / INTERFAZ
  inicio_sesion: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: ""
  }

  //crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = []


  //funcion para el inicio de sesion
  enviar() {
    const credenciales = {
      uid: this.inicio_sesion.uid,
      nombre: this.inicio_sesion.nombre,
      apellido: this.inicio_sesion.apellido,
      email: this.inicio_sesion.email,
      rol: this.inicio_sesion.rol,
      password: this.inicio_sesion.password,
    }

    for (let i = 0; i < this.usuariolocal.length; i++) {
      const orden = this.usuariolocal[i];

      if (orden.email === credenciales.email && 
          orden.password === credenciales.password) {
        alert("inicio de sesion")
      }
      else {
        alert("fallo inicio sesion")
      }
    }



    //por consola
    console.log(credenciales)
    console.log(this.coleccionUsuarios)

  }
}



