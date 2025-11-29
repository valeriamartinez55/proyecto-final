import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { PielComponent } from './components/piel-component/piel-component';
import { RutinaComponent } from './components/rutina-component/rutina-component';

export const routes: Routes = [
{path: 'piel-enlace', component: PielComponent},
{path: 'rutina-enlace', component: RutinaComponent}
];