import { Component, OnInit } from '@angular/core';
import { HttpClientServiceInterface } from '../../../../informacion/interface/httpService';
import { NotasConsultaTodoInterface } from '../../../../informacion/interface/notas';

@Component({
  selector: 'app-mis-notas',
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.scss'],
})
export class MisNotasComponent implements OnInit {
  seccionSeleccionada: string = 'notas';

  constructor() {}

  ngOnInit(): void {
    this.consultarNotas();
  }

  seleccionadoClick(seleccionado: string): void {
    this.seccionSeleccionada = seleccionado.toLowerCase();
  }

  consultarNotas(): void {
    
  }
}
