import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { Apartado1Component } from './pages/apartado-1/apartado-1.component';
import { Apartado2Component } from './pages/apartado-2/apartado-2.component';
import { Apartado3Component } from './pages/apartado-3/apartado-3.component';

const routes: Routes = [
  {
    path:"General",component:ProductoComponent
  },
  {
    path:"Apartado1",component:Apartado1Component
  },
  {
    path:"Apartado2",component:Apartado2Component
  },
  {
    path:"Apartado3",component:Apartado3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
