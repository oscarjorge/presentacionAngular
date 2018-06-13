import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';


//Modulos externos
import { TreeModule } from 'angular-tree-component';
import { EjemplosModule } from './ejemplos/ejemplos.module'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { HomeComponent } from './components/home/home.component';
import { EstructuraComponent } from './components/estructura/estructura.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { ModuloEjemplosComponent } from './components/modulo-ejemplos/modulo-ejemplos.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroduccionComponent,
    HomeComponent,
    EstructuraComponent,
    PipeComponent,
    TemplatesComponent,
    ComponentesComponent,
    ModuloEjemplosComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    TreeModule,
    HttpClientModule,
    FormsModule,
    EjemplosModule
  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
