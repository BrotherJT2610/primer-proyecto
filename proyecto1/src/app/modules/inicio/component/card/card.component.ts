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
        poblacion: "poblacion: 6785 habitantes",
        ubicacion: "Ubicacion: Argentina",
        imagen: "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/Puerto%20Madero/Puente-de-la-Mujer.jpg",
        alt: "imagen de Puerto Madero"
      },

      {
        id: "",
        nombre: "Lima",
        subtitulo: "Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. Pese a que su centro colonial se conserva, es una desbordante metrópolis y una de las ciudades más grandes de Sudamérica.",
        poblacion: " poblacion: 11.283.787 habitantes",
        ubicacion: "ubicacion: Peru",
        imagen: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRJinroAqOLOhalrR68FCUlppXPVY3xtIzGID5uLCxn16Z7HOejOgNfxzIk5FoXQPXz",
        alt: ""
      },

    ]
  }
}
