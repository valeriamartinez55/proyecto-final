import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { PielComponent } from './components/piel-component/piel-component';
import { RutinaComponent } from './components/rutina-component/rutina-component';
import { ResenaComponent } from './components/resena-component/resena-component';
import { InicioComponent } from './components/inicio-component/inicio-component';

export const routes: Routes = [
{path: '',component: InicioComponent},
{path: 'piel-enlace', component: PielComponent},
{path: 'rutina-enlace', component: RutinaComponent},
{path: 'resena-enlace', component: ResenaComponent},
{path: '**', redirectTo: ''},
];