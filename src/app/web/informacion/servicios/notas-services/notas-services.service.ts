import { Injectable } from '@angular/core';
import { MensajesAdministrador } from 'src/app/web/UX/componentes/feedback/mensajes/mensajes.service';
import { NotasService } from '../../datos/notas/notas.service';
import { HttpClientServiceInterface } from '../../interface/httpService';
import { NotasConsultaTodoInterface } from '../../interface/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasServicesService {

  constructor(private notasService: NotasService, private mensajesComponent: MensajesAdministrador) { }

  NotasSubtemasArchivosConsulta(): void {
    this.notasService
      .consultarNotasService()
      .subscribe(
        (
          respuestaNotas: HttpClientServiceInterface<NotasConsultaTodoInterface>
        ) => {
          console.log(respuestaNotas);
          this.mensajesComponent.ejecutar('success', respuestaNotas.message);
        }
      );
  }
}
