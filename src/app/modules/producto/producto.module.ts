import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { Apartado1Component } from './pages/apartado-1/apartado-1.component';
import { Apartado2Component } from './pages/apartado-2/apartado-2.component';
import { Apartado3Component } from './pages/apartado-3/apartado-3.component';


@NgModule({
  declarations: [
    ProductoComponent,
    Apartado1Component,
    Apartado2Component,
    Apartado3Component
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
