import { Injectable } from '@angular/core';
import { Resena } from '../models/resena-model';

@Injectable({
  providedIn: 'root'
})
export class ResenaServicio {
  private resenas: Resena[] = [];
  private storageKey = 'skincare_resenas';

  constructor() {
    this.cargarResenas();
  }

  agregarResena(resena: Resena): void {
    this.resenas.unshift(resena); // Agrega al inicio
    this.guardarResenas();
  }

  obtenerResenas(): Resena[] {
    return [...this.resenas];
  }

  private cargarResenas(): void {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.resenas = JSON.parse(stored);
    }
  }

  private guardarResenas(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.resenas));
  }
}