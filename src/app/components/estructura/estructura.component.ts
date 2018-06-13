import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  public nodes = [];
  public elemento:string;
  
  constructor( ) { 
    
  }

  ngOnInit() {
    this.nodes = [
      {
        id: 1,
        name: 'Mi proyecto',
        children: [
          { id: 5, name: 'dist' },
          { id: 2, name: 'e2e' },
          { id: 3, name: 'node_modules' },
          { id: 4, name: 'src', children:[
            {id: 13, name: 'app', children:[
              {id: 14, name: 'components', children:[
                {id:21, name:'app.component.html'},
                {id:22, name:'app.component.css'},
                {id:23, name:'app.component.ts'},
                {id:24, name:'app.component.spec.ts'},
              ]},
              {id: 15, name: 'services'},
              {id: 16, name: 'interfaces'},
              {id: 17, name: 'pipes'},
              {id: 18, name: 'app.module.ts'},
              {id: 19, name: 'app.routes.ts'},
            ]},
            {id: 6, name: 'index.html'},
            {id: 20, name: 'main.ts'},
            {id: 9, name: 'assets', children:[{id:10, name:'cualquierIcono.png'}]},
            {id: 11, name: 'favicon.ico'},
            {id: 12, name: 'styles.css'},
          ] },
          { id: 7, name: '.angular-cli.json' },
          { id: 8, name: 'package.json' },
        ]
      },
      
    ];

  }
  public onEvent(nodo:any){
    this.elemento = nodo.data.name;
  }
  
}
