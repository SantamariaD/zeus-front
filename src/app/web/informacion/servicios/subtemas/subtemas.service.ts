import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClientServiceInterface,
  HttpClientServiceInterfaceNoPayload,
} from '../../interface/httpService';
import { ConsultaSubtemasNota, Subtema, SubtemaConsulta } from '../../interface/subtemas';
import { HttpclientService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class SubtemasService {
  constructor(private http: HttpclientService) {}

  guardarSubtema(
    subtema: Subtema
  ): Observable<HttpClientServiceInterfaceNoPayload> {
    return this.http.post<HttpClientServiceInterfaceNoPayload>(
      '/subtemas/crear',
      subtema
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
  ): Observable<HttpClientServiceInterface<ConsultaSubtemasNota>> {
    return this.http.get<HttpClientServiceInterface<ConsultaSubtemasNota>>(
      `/subtemas/consultar/nota-subtemas/${idNota}`
    );
  }
}
