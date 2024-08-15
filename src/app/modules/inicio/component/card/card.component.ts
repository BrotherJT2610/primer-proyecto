import { Component } from '@angular/core';
//IMPORTAMOS LA INTERFAZ PARA CIUDAD
import { Ciudad } from 'src/app/models/ciudad';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA --> TIPO ARRAY
  public info: Ciudad[];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id: "",
        nombre: "Puerto Madero",
        subtitulo: "Puerto Madero es un área renovada cercana al muelle. Sus edificios reconvertidos de ladrillos rojos contienen restaurantes de carnes de lujo populares entre los turistas y los que están de almuerzo de negocios.",
        poblacion: "Poblacion: 6785 habitantes",
        ubicacion: "Ubicacion: Argentina",
        imagen: "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/Puerto%20Madero/Puente-de-la-Mujer.jpg",
        alt: "imagen de Puerto Madero"
      },

      {
        id: "",
        nombre: "Lima",
        subtitulo: "Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. Pese a que su centro colonial se conserva, es una desbordante metrópolis y una de las ciudades más grandes de Sudamérica.",
        poblacion: " Poblacion: 11.283.787 habitantes",
        ubicacion: "Ubicacion: Peru",
        imagen: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRJinroAqOLOhalrR68FCUlppXPVY3xtIzGID5uLCxn16Z7HOejOgNfxzIk5FoXQPXz",
        alt: ""
      },

      {
        id: "",
        nombre: "Ciudad de México",
        subtitulo: "Ciudad de México es la densamente poblada capital de México que se encuentra a gran altura.",
        poblacion: " Poblacion: 8,855 millones habitantes",
        ubicacion: "Ubicacion: Mexico",
        imagen: "https://media.istockphoto.com/id/539002142/es/foto/el-centro-de-la-ciudad-de-m%C3%A9xico-en-el-crep%C3%BAsculo.jpg?s=612x612&w=0&k=20&c=PeNjZTlKhrT557mkHj3m8SPJ2DHdn8TQTgZpCAJAxtQ=",
        alt: ""
      },
    ]
  }
}
