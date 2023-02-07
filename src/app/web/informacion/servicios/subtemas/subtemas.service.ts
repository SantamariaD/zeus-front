import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientServiceInterface } from '../../interface/httpService';
import { NotasConsulta } from '../../interface/notas';
import {
  ConsultaSubtemasNota,
  SubtemaConsulta,
} from '../../interface/subtemas';
import { HttpclientService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class SubtemasService {
  constructor(private http: HttpclientService) {}

  guardarSubtema(
    subtema: any
  ): Observable<HttpClientServiceInterface<ConsultaSubtemasNota>> {
    return this.http.post<HttpClientServiceInterface<ConsultaSubtemasNota>>(
      '/subtemas/crear',
      subtema,
      false
    );
  }

  consultarSubtemas(
    idNota: number
  ): Observable<HttpClientServiceInterface<Array<SubtemaConsulta>>> {
    return this.http.get<HttpClientServiceInterface<Array<SubtemaConsulta>>>(
      `/subtemas/consultar/${idNota}`
    );
  }

  consultarSubtemasNota(
    idNota: number
  ): Observable<HttpClientServiceInterface<NotasConsulta>> {
    return this.http.get<HttpClientServiceInterface<NotasConsulta>>(
      `/subtemas/consultar/nota-subtemas/${idNota}`
    );
  }
}
