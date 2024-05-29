import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//vistas del modulo autenticacion
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent,

  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    RegistroComponent,
    InicioSesionComponent
  ]
})
export class AutentificacionModule { }
