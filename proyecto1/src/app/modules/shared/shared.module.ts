import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
//IMPORTACIONES DE MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  //DECLARÉ LO SIGUIENTE:
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  //REALIZO LAS SIGUIENTES IMPORTACIONES
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],

  //REALIZO LAS SIGUIENTES EXPORTACIONES:
  exports:[
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
