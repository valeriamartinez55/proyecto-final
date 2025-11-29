import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { Components } from './components/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Components],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-final-valeria');
}
