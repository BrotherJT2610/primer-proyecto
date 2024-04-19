import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
