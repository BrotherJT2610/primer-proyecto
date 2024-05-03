import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicoComponent } from './modules/inicio/pages/inico/inico.component';

const routes: Routes = [
  //es una ruta comun que te lleva a un componente
  {path:"",component:InicoComponent},
  //carga PEREZOSA= ruta que lleva a un modulo especifico
  //loadChildren: indica que habra una ruta fija
  //()=>import: funcion flecha que importa desde la ruta
  //.then: Funcion asincronica del tipo PROMESA
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
