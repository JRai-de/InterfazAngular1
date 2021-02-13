import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Pais1Component } from './pais1/pais1.component';//importacion para cargar de datos del componente
import { Pais2Component } from './pais2/pais2.component';//importacion para cargar de datos del componente
import { Pais3Component } from './pais3/pais3.component';//importacion para cargar de datos del componente
import { Art4Component } from './art4/art4.component';//importacion para cargar de datos del componente

@NgModule({
  declarations: [//Declarciones de componentes que luego usaremos
    AppComponent,
    BarralateralComponent,
    Pais1Component,
    Pais2Component,
    Pais3Component,
    Art4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
