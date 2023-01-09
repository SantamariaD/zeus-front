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
  ];

  constructor() {}

  ngOnInit(): void {}

  seleccionadoClick(seleccionado: string): void {
    this.seccionSeleccionada = seleccionado.toLowerCase();
  }

  mostrarBoton(): void {
    if (this.secciones.length <= 2) {
      this.secciones.push({ texto: 'Ver nota', seleccionado: true });
    } else if (this.secciones.length > 2) {
      this.secciones[2].seleccionado = true;
    }

    this.secciones[0].seleccionado = false;
    this.secciones[1].seleccionado = false;
    this.seccionSeleccionada = 'ver nota';
  }
}
