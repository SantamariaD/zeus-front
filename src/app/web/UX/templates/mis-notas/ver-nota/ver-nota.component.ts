import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, of, Subscription, take } from 'rxjs';
import { NotasConsulta } from 'src/app/web/informacion/interface/notas';
import { selectNotaSubtemasInformacion } from 'src/app/web/informacion/state';
import { environment } from 'src/environments/environment';
import { FormularioSubtemaComponent } from './formulario-subtema/formulario-subtema.component';
import { FormularioSubtituloComponent } from './formulario-subtitulo/formulario-subtitulo.component';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.scss'],
})
export class VerNotaComponent implements OnInit {
  /**
   * @Variable nota: Información de la nota y los subtemas relacionados a está
   */
  nota: NotasConsulta = {} as NotasConsulta;

  /**
   * @Variable cardFija: Cuando es true se asigna la clase fixed para la card
   */
  cardFija = false;

  /**
   * @Variable rutaImagen: ruta para traer la imagen de la nota
   */
  rutaImagen = '';

  /**
   * @Variable subscripcionSubtema: escucha el evento de guardar un subtema
   */
  subscripcionSubtema: Subscription = Subscription.EMPTY;

  /**
   * @observable informacionStore$: observable que contiene la información actualizada del store
   */
  informacionStore$: Observable<any> = of();

  constructor(private modalService: NzModalService, private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectNotaSubtemasInformacion)
      .pipe(take(1))
      .subscribe((nota: NotasConsulta) => (this.nota = nota));
    this.rutaImagen =
      environment.urls.backDevelop +
      '/notas/consultar/nota/imagen/' +
      localStorage.getItem('id') +
      '/' +
      this.nota.imagen;
    this.informacionStore$ = this.store.select((state) => state);
    this.informacionStore$.subscribe((store) => {
      if (store.nota.subtemas.length == this.nota.subtemas.length + 1) {
        this.nota.subtemas.push(
          store.nota.subtemas[store.nota.subtemas.length - 1]
        );
      }
    });
  }

  // Metodo para capturar el evento de scroll
  @HostListener('window:scroll', ['$event'])
  windowsScroll(scroll: any) {
    if (scroll.srcElement.children[0].scrollTop > 100) {
      this.cardFija = true;
    } else {
      this.cardFija = false;
    }
  }

  // Método para abrir modal para agregar subtitulo
  formularioSubtitulo(): void {
    this.modalService.create({
      nzTitle: 'Agregar un subtitulo',
      nzContent: FormularioSubtituloComponent,
      nzMaskClosable: false,
      nzOkText: null,
      nzCancelText: 'Cerrar',
      nzClosable: false,
    });
  }

  // Método para abrir modal para agregar subtitulo
  formularioSubtema(): void {
    this.modalService.create({
      nzTitle: 'Agregar un subtema',
      nzContent: FormularioSubtemaComponent,
      nzMaskClosable: false,
      nzOkText: null,
      nzCancelText: 'Cerrar',
    });
  }

  // Método que contiene la información de los elementos que se arrastran y suelta
  soltar(soltarEvento: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.nota.subtemas,
      soltarEvento.previousIndex,
      soltarEvento.currentIndex
    );
    if (soltarEvento.previousIndex !== soltarEvento.currentIndex) {
      
    console.log(soltarEvento);
    }
  }
}
