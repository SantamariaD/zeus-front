import { Component, Input, OnInit } from '@angular/core';
import {
  TiposEvento,
  TiposFeedback,
} from 'src/app/web/informacion/interface/feedback';
import { MensajesAdministrador } from './mensajes/mensajes.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  /**
   * @Input
   * Variable que elige el tipo de feedback
   *
   * @type string
   *
   * opciones:
   * @option mensajes
   * @option modales
   * @option resultados
   * @option alertas
   */
  @Input() tipoFeedback: TiposFeedback = '';

  /**
   *  @Input
   * Variable que elige el tipo de evento en el feedback seleccionado
   *
   * @type string
   *
   * opciones:
   * @option success
   * @option error
   * @option warning
   */
  @Input() tipoEvento: TiposEvento = '';

  /**
   * @Input
   * Variable que tiene el mensaje a mostrar en el evento seleccionado
   *
   * @type string
   */
  @Input() mensaje: string = '';

  constructor(private mensajesComponent: MensajesAdministrador) {}

  ngOnInit(): void {
    if (this.tipoFeedback === 'mensaje') {
      this.mensajesComponent.ejecutar(this.tipoEvento, this.mensaje);
    }
  }
}
