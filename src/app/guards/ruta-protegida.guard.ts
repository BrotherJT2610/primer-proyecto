import { CanActivateFn } from '@angular/router';

//inyeccion de servicios
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

//operadores de tipo observables
import { map,switchMap, of, from } from 'rxjs';
export const rutaProtegidaGuard: CanActivateFn = (route, state) => {

  //inyectamos / instanciamos servicio de autentificacion
  const servicioAuth = inject(AuthService);

  //inyectamos / instanciamos servicio de rutas
  const servicioRutas = inject(Router)
  
  //especificamos el rol esperado en el guardian
  const rolEsperado = "admin"
  return true;
};
