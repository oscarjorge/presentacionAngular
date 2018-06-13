import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Servicios
import { EjemploService } from "./services/ejemplo.service";

import { EjemplosComponent } from './components/ejemplos/ejemplos.component';
import { DirectivaNgclassComponent } from './components/directiva-ngclass/directiva-ngclass.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EjemplosComponent, DirectivaNgclassComponent],
  exports:[
    EjemplosComponent,
    DirectivaNgclassComponent
  ],
  providers:[
    EjemploService,
  ]
})
export class EjemplosModule { }
