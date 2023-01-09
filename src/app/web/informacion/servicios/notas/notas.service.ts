import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientServiceInterface } from '../../interface/httpService';
import { Nota, NotasConsulta } from '../../interface/notas';
import { HttpclientService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class NotasService {
  constructor(private http: HttpclientService) {}

  guardarNota(nota: Nota): Observable<HttpClientServiceInterface<NotasConsulta>> {
    return this.http.post<HttpClientServiceInterface<NotasConsulta>>(
      '/notas/crear',
      nota
    );
  }

  consultarNotas(idUsuario: number): Observable<HttpClientServiceInterface<Array<NotasConsulta>>> {
    return this.http.get<HttpClientServiceInterface<Array<NotasConsulta>>>(
      `/notas/consultar/notas-usuario/${idUsuario}`
    );
  }

}
