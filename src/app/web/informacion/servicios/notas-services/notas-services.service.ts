import { Injectable } from '@angular/core';
import { NotasService } from '../../datos/notas/notas.service';
import { HttpClientServiceInterface } from '../../interface/httpService';
import { NotasConsultaTodoInterface } from '../../interface/notas';

@Injectable({
  providedIn: 'root',
})
export class NotasServicesService {
  constructor(
    private notasService: NotasService,
  ) {}

  NotasSubtemasArchivosConsulta(): Promise<
    HttpClientServiceInterface<NotasConsultaTodoInterface>
  > {
    return new Promise((resolve, reject) => {
      this.notasService.consultarNotasService().subscribe({
        next(
          respuestaNotas: HttpClientServiceInterface<NotasConsultaTodoInterface>
        ) {
          resolve(respuestaNotas);
        },
        error() {
          reject('fallo');
        },
      });
    });
  }
}
