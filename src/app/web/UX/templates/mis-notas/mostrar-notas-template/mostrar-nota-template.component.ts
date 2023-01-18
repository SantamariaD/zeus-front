import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClientServiceInterface } from 'src/app/web/informacion/interface/httpService';
import {
  NotaCard,
  NotasConsulta,
} from 'src/app/web/informacion/interface/notas';
import { ConsultaSubtemasNota } from 'src/app/web/informacion/interface/subtemas';
import { NotasService } from 'src/app/web/informacion/servicios/notas/notas.service';
import { SubtemasService } from 'src/app/web/informacion/servicios/subtemas/subtemas.service';
import { guardarNotaSubtemas } from 'src/app/web/informacion/state/nota/nota.actions';

@Component({
  selector: 'app-mostrar-nota-template',
  templateUrl: './mostrar-nota-template.component.html',
  styleUrls: ['./mostrar-nota-template.component.scss'],
})
export class MostrarNotaTemplateComponent implements OnInit {
  /**
   * @Salida verNota: emite un bolean en true para poder activar la pestaña de ver nota a ir a ella
   */
  @Output() verNota = new EventEmitter<boolean>();

  /**
   * @Variable notas: Contiene la informción de todas las notas generadas por el usuario
   */
  notas: Array<NotasConsulta> = [];

  constructor(
    private notasService: NotasService,
    private subtemasService: SubtemasService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.consultarNotas();
  }

  // Método que realiza la consulta de las notas hechas por el usuario
  consultarNotas(): void {
    const idUsuario = Number(localStorage.getItem('id'));
    this.notasService
      .consultarNotas(idUsuario)
      .subscribe(
        (respuestaNotas: HttpClientServiceInterface<Array<NotasConsulta>>) =>
          (this.notas = respuestaNotas.payload)
      );
  }

  // Método para poder ver la información de la nota seleccionada
  clickCard(nota: NotaCard): void {
    window.scroll({
      top: 0,
      left: 0,
    });
    this.subtemasService
      .consultarSubtemasNota(nota.idNota)
      .subscribe(
        (
          respuestaSubtemas: HttpClientServiceInterface<ConsultaSubtemasNota>
        ) => {
          this.store.dispatch(
            guardarNotaSubtemas({ notaSubtemas: respuestaSubtemas.payload })
          );
          this.verNota.emit(true);
        }
      );
  }
}
