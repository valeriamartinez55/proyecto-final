import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- 1. Importar esto

@Component({
  selector: 'app-inicio-component',
  standalone: true,
  imports: [RouterLink], // <--- 2. Agregar aquí
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.css'
})
export class InicioComponent {
  // ...
}
