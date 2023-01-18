import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Areas, Subareas } from 'src/app/web/informacion/interface/areas';
import { HttpClientServiceInterface } from 'src/app/web/informacion/interface/httpService';
import {
  GeneradorNotas,
  Nota,
  NotasConsulta,
} from 'src/app/web/informacion/interface/notas';
import { ConsultaSubtemasNota } from 'src/app/web/informacion/interface/subtemas';
import { AreasService } from 'src/app/web/informacion/servicios/areas/areas.service';
import { NotasService } from 'src/app/web/informacion/servicios/notas/notas.service';
import { guardarNota } from 'src/app/web/informacion/state/nota/nota.actions';
import { MensajesAdministrador } from '../../../componentes/feedback/mensajes/mensajes.service';

@Component({
  selector: 'app-crear-nota-template',
  templateUrl: './crear-nota-template.component.html',
  styleUrls: ['./crear-nota-template.component.scss'],
})
export class CrearNotaTemplateComponent implements OnInit {
  /**
   * @Salida botonGuardar: emite un boolean en true en caso de que se guarde la nota
   */
  @Output() botonGuardar = new EventEmitter<boolean>();
  habilitarSubarea = false;
  habilitarBoton = false;
  areas: Array<Areas> = [];
  subareas: Array<Subareas> = [];
  idSubarea = null;
  notaForm: FormGroup = new FormGroup({
    idAreaConocimiento: new FormControl('', [Validators.required]),
    idSubarea: new FormControl('', [Validators.required]),
    tema: new FormControl({ value: '', disabled: true }, Validators.required),
    idUsuario: new FormControl('', [Validators.required]),
  });

  constructor(
    private notasService: NotasService,
    private areasService: AreasService,
    private store: Store,
    private mensajesAdministrador: MensajesAdministrador
  ) {}

  ngOnInit(): void {
    this.traerAreas();
  }

  // Método para habilitar select subareas
  habilitarSubareas(): void {
    this.habilitarSubarea = this.notaForm.value.idAreaConocimiento
      ? true
      : false;

    // Trae las subáreas con base en el área seleccionada
    this.areasService
      .consultarSubareas(this.notaForm.value.idAreaConocimiento)
      .subscribe(
        (respuestaAreas: HttpClientServiceInterface<Array<Subareas>>) =>
          (this.subareas = respuestaAreas.payload)
      );
  }

  // Método para habilitar input tema
  habilitarTemaInput(): void {
    this.notaForm.get('tema')?.enable();
  }

  // Método para habilitar boton guardar
  habilitarBotonGuardar(): void {
    this.habilitarBoton = this.notaForm.value.tema ? true : false;
  }

  // Método para traer las áreas de conocimiento
  traerAreas(): void {
    this.notaForm.patchValue({
      idUsuario: Number(localStorage.getItem('id')),
    });

    this.areasService
      .consultarAreas()
      .subscribe(
        (respuestaAreas: HttpClientServiceInterface<Array<Areas>>) =>
          (this.areas = respuestaAreas.payload)
      );
  }

  // Método para guardar nota
  guardarNota(): void {
    this.notasService
      .guardarNota(this.notaForm.value)
      .subscribe((respuestaNota: HttpClientServiceInterface<NotasConsulta>) => {
        this.store.dispatch(
          guardarNota({
            nota: {
              idAreaConocimiento: respuestaNota.payload.id_area_conocimiento,
              idSubarea: respuestaNota.payload.id_subarea,
              idUsuario: respuestaNota.payload.id,
              tema: respuestaNota.payload.tema,
              identificador: respuestaNota.payload.identificador,
              id: respuestaNota.payload.id,
              notaSubtemas: {} as ConsultaSubtemasNota
            },
          })
        );

        this.mensajesAdministrador.ejecutarMensaje('success', 'Nota guardada');
        this.notaForm.reset();
        this.habilitarSubarea = false;
        this.habilitarBoton = false;
        this.notaForm.get('tema')?.disable();
        this.botonGuardar.emit(true);
      });
  }
}
