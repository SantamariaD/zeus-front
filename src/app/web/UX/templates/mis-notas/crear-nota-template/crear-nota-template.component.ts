import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Areas, Subareas } from 'src/app/web/informacion/interface/areas';
import { HttpClientServiceInterface } from 'src/app/web/informacion/interface/httpService';
import { NotasConsulta } from 'src/app/web/informacion/interface/notas';
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

  /**
   * @variable habilitarSubarea: Habilita el campo de subarea del formulario
   */
  habilitarSubarea = false;

  /**
   * @variable habilitarBoton: Habilita el boton de enviado
   */
  habilitarBoton = false;

  /**
   * @variable habilitarArchivo: Habilita el input de archivo
   */
  habilitarArchivo = true;

  /**
   * @variable areas: Arreglo que contiene las áreas del select
   */
  areas: Array<Areas> = [];

  /**
   * @variable subareas: Arreglo que contiene las subareas para el select
   */
  subareas: Array<Subareas> = [];

  /**
   * @formulario notaForm: Formulario que captura los datos ingresados por el front
   */
  notaForm: FormGroup = new FormGroup({
    idAreaConocimiento: new FormControl(0, [Validators.required]),
    idSubarea: new FormControl('', [Validators.required]),
    tema: new FormControl({ value: '', disabled: true }, Validators.required),
    idUsuario: new FormControl('', [Validators.required]),
  });

  /**
   * @variable notaFormData: Formulario que se envíara al back tipo form-data ya que contiene un archivo
   */
  notaFormData = new FormData();

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

  // Método para habilitar imagen
  habilitarImagen(): void {
    this.habilitarArchivo = false;
  }

  // Método para habilitar boton guardar
  habilitarBotonGuardar(event: any): void {
    this.habilitarBoton = true;
    this.notaFormData.append('file', event.target.files[0]);
    this.notaFormData.append(
      'idAreaConocimiento',
      this.notaForm.value.idAreaConocimiento
    );
    this.notaFormData.append('idSubarea', this.notaForm.value.idSubarea);
    this.notaFormData.append('tema', this.notaForm.value.tema);
    this.notaFormData.append('idUsuario', this.notaForm.value.idUsuario);
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
      .guardarNota(this.notaFormData)
      .subscribe((respuestaNota: HttpClientServiceInterface<NotasConsulta>) => {
        this.store.dispatch(
          guardarNota({
            nota: {
              idAreaConocimiento: respuestaNota.payload.area_id,
              idUsuario: respuestaNota.payload.id,
              tema: respuestaNota.payload.tema,
              imagen: respuestaNota.payload.imagen,
              identificador: respuestaNota.payload.uuid,
              id: respuestaNota.payload.id,
              notaSubtemas: {} as ConsultaSubtemasNota,
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
