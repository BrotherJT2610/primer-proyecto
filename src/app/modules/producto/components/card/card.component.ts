import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //definimos coleccion local de productos
  coleccionProductos: Producto[] = [];

   // Colección de sólo productos de categoría "Juguetes"
   coleccionSouvenirs: Producto[] = [];

  //variable local para obtener producto seleccionado
  productoSeleccionado!: Producto;
  //variable para manejar el estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  // Función para filtrar los productos que sean del tipo "souvenirs"
  mostrarProductoSouvenirs(){
    // forEach: itera la colección
    this.coleccionProductos.forEach(producto => {
      // Si la categoría del producto es igual a "Souvenirs", se enviará a la 
      // colección de juguetes específicada

      if(producto.categoria === "souvenirs"){ //ACA NOSE SI VA "souvenirs" O "apartado-1"
        // .push: sube o agrega un item a una colección
        this.coleccionSouvenirs.push(producto);
      }
    })
  }

  //funcion para modal que muestre la informacion del producto especifico
  mostrarVer(info: Producto) {
    //
    this.modalVisible = true;

    //guarda informacion de un producto elegido por el usuario
    this.productoSeleccionado = info;
  }
}
