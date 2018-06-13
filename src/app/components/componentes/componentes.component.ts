import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  constructor() { }
  visible: boolean = true;
  name: string = '';
  ngOnInit() {
  }
  changeVisible() {
    this.visible = !this.visible;
  }
}
