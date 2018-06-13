import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngclass',
  templateUrl: './directiva-ngclass.component.html',
  styleUrls: ['./directiva-ngclass.component.css']
})
export class DirectivaNgclassComponent implements OnInit {

  constructor() { }

  texto: string =  "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo; 
  }

  ngOnInit() {
  }

}
