import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//Importamos paqueteria de SweetAlert para alertas personalizadas
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear colección de productos del tipo producto -> lo definimos como un array
  coleccionProductos: Producto[] = [];

  //variable para manejar el estado de Edicion y Eliminacionde productos 
  modalVisibleproducto: boolean = false;

  //variable va a tomar el producto de que nosotros elegimos 
  productoSeleccionado!: Producto
  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    // subscribe -> notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // guarda la información recibida como un nuevo "producto" a la colección
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    // validamos los valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        // idProducto no se toma porque es generado por la BD y no por el usuario
        idProducto: '',
        // el resto es tomado con información ingresada por el usuario
        nombre: this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        Swal.fire({
          title: "Excelente!",
          text: "Ha agregado un nuevo producto con éxito!",
          icon: "success"
        });
        this.producto.reset(); //Vaciar inputs
      })
      .catch(error => {
        Swal.fire({
          title: "ERROR!",
          text: "Hubo un problema al agregar un nuevo producto",
          icon: "error"
        });
        this.producto.reset(); //Vaciar inputs
      })
    }
  }
  mostrarBorrar(productoSeleccionado:Producto){
    this.modalVisibleproducto = true; //abre el modal
    this.productoSeleccionado = productoSeleccionado; //toma los valores del producto elegido
  }

  //funcion para eliminar definitivamente al producto
  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("el producto se ha eliminado correctamente")
    })
    .catch(error => {
      alert("No se ha podido eliminar el producto \n"+error)
    })
  }

  // Función para seleccionar el producto a editar
  mostrarEditar(productoSeleccionado: Producto){
    this.productoSeleccionado = productoSeleccionado;

    // Enviar o "setear" los nuevos valores y reasignarlos a las variables
    // El ID no se vuelve a enviar ni se modifica, por ende no lo llamamos
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  editarProducto(){
    let datos: Producto = {
      // Solo el ID toma y deja igual su valor
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!
    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      alert("El producto fue modificado con éxito.");
    })
    .catch(error => {
      alert("Hubo un problema al modificar el producto.");
    })
  }
}