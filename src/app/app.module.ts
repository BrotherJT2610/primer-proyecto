import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

import { environment } from "src/environments/environment";
import { AngularFireModule } from '@angular/fire/compat';//Es para el cloud firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth';//Es para la autenticacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //es para la base de datos de archivos e imagenes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  //inicializa firebase en nuestro proyecto
    AngularFireAuthModule,   //autentificacion
    AngularFireStorageModule  //storage -> BD de imagenes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
