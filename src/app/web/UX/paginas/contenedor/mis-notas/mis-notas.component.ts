import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/web/informacion/servicios/notas/notas.service';
import { HttpClientServiceInterface } from '../../../../informacion/interface/httpService';
import { NotasConsultaTodoInterface } from '../../../../informacion/interface/notas';

@Component({
  selector: 'app-mis-notas',
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.scss'],
})
export class MisNotasComponent implements OnInit {
  seccionSeleccionada: string = 'notas';

  constructor(private notasService: NotasService) {}

  ngOnInit(): void {
    this.consultarNotas();
  }

  seleccionadoClick(seleccionado: string): void {
    this.seccionSeleccionada = seleccionado.toLowerCase();
  }

  consultarNotas(): void {
    this.notasService
      .consultarNotasService()
      .subscribe(
        (
          respuestaNotas: HttpClientServiceInterface<NotasConsultaTodoInterface>
        ) => {
          console.log(respuestaNotas);
        }
      );
  }
}
