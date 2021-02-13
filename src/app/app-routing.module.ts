import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pais1Component } from './pais1/pais1.component';//Ruta para cargar de datos del componente
import { Pais2Component } from './pais2/pais2.component';//Ruta para cargar de datos del componente
import { Pais3Component } from './pais3/pais3.component';//Ruta para cargar de datos del componente
import { Art4Component } from './art4/art4.component';//Ruta para cargar de datos del componente


const routes: Routes = [
  {
    path: 'pais1', component: Pais1Component//Ruta para cargar de datos del componente
  },
  {
    path: 'pais2', component: Pais2Component//Ruta para cargar de datos del componente
  },
  {
    path: 'pais3', component: Pais3Component//Ruta para cargar de datos del componente
  },
  {
    path: 'art4', component: Art4Component//Ruta para cargar de datos del componente
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
