import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-souvenirs',
  templateUrl: './card-souvenirs.component.html',
  styleUrls: ['./card-souvenirs.component.css']
})
export class CardSouvenirsComponent {
  coleccionProductos: Producto[] = [];

  coleccionSouvenirs: Producto[] = [];

  productoseleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  mostrarProductoSouvenirs(){
    this.coleccionProductos.forEach(producto => {
      if(producto.categoria === "souvenirs"){
        this.coleccionSouvenirs.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;
    this.productoseleccionado = info;
  }
}
