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
  @Output() verNota = new EventEmitter<boolean>();
  notas: Array<NotasConsulta> = [];

  constructor(
    private notasService: NotasService,
    private subtemasService: SubtemasService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.consultarNotas();
  }

  consultarNotas(): void {
    const idUsuario = Number(localStorage.getItem('id'));
    this.notasService
      .consultarNotas(idUsuario)
      .subscribe(
        (respuestaNotas: HttpClientServiceInterface<Array<NotasConsulta>>) =>
          (this.notas = respuestaNotas.payload)
      );
  }

  clickCard(nota: NotaCard): void {
    window.scroll({ 
      top: 0, 
      left: 0
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
