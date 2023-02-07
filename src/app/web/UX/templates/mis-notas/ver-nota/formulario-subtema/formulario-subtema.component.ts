import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, take } from 'rxjs';
import { HttpClientServiceInterface } from 'src/app/web/informacion/interface/httpService';
import { NotasConsulta } from 'src/app/web/informacion/interface/notas';
import { ConsultaSubtemasNota } from 'src/app/web/informacion/interface/subtemas';
import { SubtemasService } from 'src/app/web/informacion/servicios/subtemas/subtemas.service';
import { selectNotaSubtemasInformacion } from 'src/app/web/informacion/state';
import { guardarSubtemaUsuario } from 'src/app/web/informacion/state/nota/nota.actions';
import { MensajesAdministrador } from 'src/app/web/UX/componentes/feedback/mensajes/mensajes.service';

@Component({
  selector: 'app-formulario-subtema',
  templateUrl: './formulario-subtema.component.html',
  styleUrls: ['./formulario-subtema.component.scss'],
})
export class FormularioSubtemaComponent implements OnInit {
  /**
   * @variable botonCargar: muestra el botón de carga
   */
  botonCarga = false;

  /**
   * @variable botonGuardarDeshabilitar: muestra el botón de guardar
   */
  botonGuardarDeshabilitar = true;

  /**
   * @formulario subtemaForm: Formulario que captura los datos ingresados por el front
   */
  subtemaForm: FormGroup = new FormGroup({
    idNota: new FormControl(0, [Validators.required]),
    subtema: new FormControl('', [Validators.required]),
    numeroSubtema: new FormControl(null),
  });

  constructor(
    private store: Store,
    private subtemasService: SubtemasService,
    private mensajesAdministrador: MensajesAdministrador
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectNotaSubtemasInformacion)
      .pipe(take(1))
      .subscribe((notaConsultaSelect: NotasConsulta) =>
        this.subtemaForm.patchValue({
          numeroSubtema: notaConsultaSelect.subtemas.length,
          idNota: notaConsultaSelect.id,
        })
      );
  }

  // Método para habilitar botón
  habilitarGuardar(): void {
    if (this.subtemaForm.value.subtema) {
      this.botonGuardarDeshabilitar = false;
    } else {
      this.botonGuardarDeshabilitar = true;
    }
  }

  // Método para guardar el subtema en la base
  guardarSubtema(): void {
    this.botonCarga = true;
    this.subtemasService
      .guardarSubtema(this.subtemaForm.value)
      .subscribe(
        (
          respuestaSubtema: HttpClientServiceInterface<ConsultaSubtemasNota>
        ) => {
          this.store.dispatch(
            guardarSubtemaUsuario({ subtema: respuestaSubtema.payload })
          );
          this.botonCarga = false;
          this.subtemaForm.reset();
          this.mensajesAdministrador.ejecutarMensaje('success', 'Subtema guardado');
          this.botonGuardarDeshabilitar = true;
        }
      );
  }
}
