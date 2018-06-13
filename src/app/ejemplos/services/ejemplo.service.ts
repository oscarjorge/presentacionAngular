import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Perro } from '../interfaces/perro.interface';

/*
  Generated class for the Netflix provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EjemploService {

  //private base = 'https://swapi.co/api/';
  private base = 'https://dog.ceo/api/'
  constructor(private http: HttpClient) {
  }

  getRazas(): Observable<any> {
    return this.http.get(`${this.base}breeds/list/all`)
  }
  getImages(raza:string): Observable<any> {
    return this.http.get(`${this.base}breed/${raza}/images`)
  }
  

  


}