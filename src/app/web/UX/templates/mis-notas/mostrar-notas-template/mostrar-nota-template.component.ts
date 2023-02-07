import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { HttpClientServiceInterface } from 'src/app/web/informacion/interface/httpService';
import {
  NotaCard,
  NotasConsulta,
} from 'src/app/web/informacion/interface/notas';
import { NotasService } from 'src/app/web/informacion/servicios/notas/notas.service';
import { SubtemasService } from 'src/app/web/informacion/servicios/subtemas/subtemas.service';
import { selectNotasConsulta } from 'src/app/web/informacion/state';
import {
  guardarNota,
  guardarNotaSubtemas,
} from 'src/app/web/informacion/state/nota/nota.actions';
import { notasUsuarioConsulta } from 'src/app/web/informacion/state/notas/notas.actions';
import { environment } from 'src/environments/environment';

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

  /**
   * @Variable urlBase: url base para traer imagenes de las notas desde la base
   */
  urlBase = environment.urls.backDevelop + '/notas/consultar/nota/imagen/';

  constructor(
    private notasService: NotasService,
    private subtemasService: SubtemasService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectNotasConsulta)
      .pipe(take(1))
      .subscribe((notas: Array<NotasConsulta>) =>
        notas.length < 1 ? this.consultarNotas() : (this.notas = notas)
      );
  }

  // Método que realiza la consulta de las notas hechas por el usuario
  consultarNotas(): void {
    const idUsuario = Number(localStorage.getItem('id'));
    this.notasService
      .consultarNotas(idUsuario)
      .subscribe(
        (respuestaNotas: HttpClientServiceInterface<Array<NotasConsulta>>) => {
          this.store.dispatch(
            notasUsuarioConsulta({ notas: respuestaNotas.payload })
          );
          this.notas = respuestaNotas.payload;
        }
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
          respuestaSubtemas: HttpClientServiceInterface<NotasConsulta>
        ) => {
          this.store.dispatch(
            guardarNotaSubtemas({ notaInformacion: respuestaSubtemas.payload })
          );
          this.verNota.emit(true);
        }
      );
  }
}
