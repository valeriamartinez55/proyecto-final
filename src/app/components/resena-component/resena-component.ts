import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Resena } from '../../models/resena-model';
import { ResenaServicio } from '../../services/resena-servicio';

@Component({
  selector: 'app-resena-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resena-component.html',
  styleUrl: './resena-component.css'
})
export class ResenaComponent implements OnInit {
  resenas: Resena[] = [];
  
  nuevaResena: Resena = {
    nombreProducto: '',
    puntuacion: 5,
    descripcion: ''
  };

  constructor(private resenaServicio: ResenaServicio) {}

  ngOnInit(): void {
    this.resenas = this.resenaServicio.obtenerResenas();
  }

  agregarResena(): void {
    if (this.nuevaResena.nombreProducto && this.nuevaResena.descripcion) {
      this.resenaServicio.agregarResena(this.nuevaResena);
      this.resenas = this.resenaServicio.obtenerResenas();
      
      // Resetear formulario
      this.nuevaResena = {
        nombreProducto: '',
        puntuacion: 5,
        descripcion: ''
      };
    }
  }
}