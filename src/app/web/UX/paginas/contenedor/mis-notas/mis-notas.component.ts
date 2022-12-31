import { Component, OnInit } from '@angular/core';
import { HttpClientServiceInterface } from '../../../../informacion/interface/httpService';

@Component({
  selector: 'app-mis-notas',
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.scss'],
})
export class MisNotasComponent implements OnInit {
  seccionSeleccionada: string = 'notas';
  secciones = [
    { texto: 'Notas', seleccionado: true },
    { texto: 'Crear nota', seleccionado: false },
    { texto: 'Ver nota', seleccionado: false }
  ];

  constructor() {}

  ngOnInit(): void {
    this.consultarNotas();
  }

  seleccionadoClick(seleccionado: string): void {
    this.seccionSeleccionada = seleccionado.toLowerCase();
  }

  consultarNotas(): void {
    
  }

  mostrarBoton(): void {
   this.secciones.push({ texto: 'Ver nota', seleccionado: true });
    this.secciones[1].seleccionado = false;
    this.seccionSeleccionada = 'ver nota';
  }
}
