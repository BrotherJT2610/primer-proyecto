import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-souvenirs',
  templateUrl: './card-souvenirs.component.html',
  styleUrls: ['./card-souvenirs.component.css']
})
export class CardSouvenirsComponent {
//definimos coleccion local de productos
coleccionProductos: Producto[] = [];

// Colección de sólo productos de categoría "souvenirs"
coleccionSouvenirs: Producto[] = [];

//variable local para obtener producto seleccionado
productoSeleccionado!: Producto;
//variable para manejar el estado de un modal
modalVisible: boolean = false;

constructor(public servicioCrud: CrudService) { }

ngOnInit(): void {
 this.servicioCrud.obtenerProducto().subscribe(producto => {
   this.coleccionProductos = producto;

   this.mostrarProductoSouvenirs();
 })
}

// Función para filtrar los productos que sean del tipo "souvenirs"
mostrarProductoSouvenirs(){
 // forEach: itera la colección
 this.coleccionProductos.forEach(producto => {
   // Si la categoría del producto es igual a "souvenirs", se enviará a la 
   // colección de souvenirs específicada

   if(producto.categoria === "apartado-1"){ 
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
