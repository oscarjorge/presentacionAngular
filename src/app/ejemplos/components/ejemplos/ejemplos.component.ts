import { Component, OnInit } from '@angular/core';
import { EjemploService } from "../../services/ejemplo.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Perro } from '../../interfaces/perro.interface';
@Component({
  selector: 'moduloEjemplos-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {
  public servicio: EjemploService
  constructor(private ejemploService: EjemploService) {
    this.servicio = ejemploService;
  }
  perros: Perro[];
  ngOnInit() {
    this.getRazas();
  }
  public getImages(raza: string) {
    let perro = this.perros.find(p => p.Raza == raza);
    if (perro != null) {
      if (perro.Imagenes == null || perro.Imagenes.length == 0)
        this.servicio.getImages(raza).subscribe(datos => {
          perro.Imagenes = [];
          datos["message"].forEach(element => {
            perro.Imagenes.push(element);
          });
          this.randomImage(perro);
        });
      else
        this.randomImage(perro);
    }

  }
  public getRazas() {

    this.servicio.getRazas().subscribe(datos => {
      this.flatten(datos["message"]);

    });
  }
  public randomImage(perro: Perro) {
    console.log(perro);
    perro.ImagenSelected = perro.Imagenes[Math.floor(Math.random() * perro.Imagenes.length)];
  }

  private flatten(obj) {
    if (obj != null) {
      this.perros = [];
      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {

          this.perros.push({ Raza: property });
        }
      }
    }

  }
}
