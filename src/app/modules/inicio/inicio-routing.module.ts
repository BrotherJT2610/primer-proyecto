import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicoComponent } from './pages/inico/inico.component';

const routes: Routes = [
  {path:"",component:InicoComponent},
  {path:"inicio",component:InicoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
