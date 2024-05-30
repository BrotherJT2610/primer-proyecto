import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicoComponent } from './pages/inico/inico.component';
import { CardComponent } from './component/card/card.component';

//COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    InicoComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
