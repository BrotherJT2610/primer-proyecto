import { CanActivateFn } from '@angular/router';

//inyeccion de servicios
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

//operadores de tipo observables
import { map, switchMap, of, from } from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {

  //inyectamos / instanciamos servicio de autentificacion
  const servicioAuth = inject(AuthService);

  //inyectamos / instanciamos servicio de rutas
  const servicioRutas = inject(Router)

  //especificamos el rol esperado en el guardian
  const rolEsperado = "admin"

  return from (servicioAuth.obtenerUid()).pipe(
    switchMap(uid => {
      if (uid) {
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol => {
            if (rol === rolEsperado) {
              //si coincide el rol esperado habilita el acceso al usuario
              console.log("usuario verificado como administrador")

              return true;
            } else {
              return false;
            }
          })
        )
      }else {
        console.log("usuario no validado. Permisos insuficientes ")
        return of(servicioRutas.createUrlTree(["/inicio"]))
      }
      
    })
  )
};
