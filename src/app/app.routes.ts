import { RouterModule, Routes } from '@angular/router';

import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { HomeComponent } from './components/home/home.component';
import { EstructuraComponent } from './components/estructura/estructura.component';
import { ModuloEjemplosComponent } from './components/modulo-ejemplos/modulo-ejemplos.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'introduccion', component: IntroduccionComponent },
    { path: 'estructura', component: EstructuraComponent },
    { path: 'templates', component: TemplatesComponent,
        children:[
            {  path: 'componentes', component: ComponentesComponent },
            {  path: 'pipes', component: PipeComponent },
            { path: 'directivas', component: DirectivasComponent },
        ] },
    { path: 'ejemplos', component: ModuloEjemplosComponent },
    
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });