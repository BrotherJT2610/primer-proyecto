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
  //funcion para modal que muestre la informacion del producto especifico
  mostrarVer(info: Producto) {
    //
    this.modalVisible = true;

    //guarda informacion de un producto elegido por el usuario
    this.productoSeleccionado = info;
  }
}
