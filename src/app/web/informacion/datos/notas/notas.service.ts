import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientServiceInterface } from 'src/app/web/informacion/interface/httpService';
import { NotasConsultaTodoInterface } from 'src/app/web/informacion/interface/notas';
import { HttpclientService } from '../../servicios/httpService/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class NotasService {
  constructor(private http: HttpclientService) {}

  consultarNotasService(): Observable<
    HttpClientServiceInterface<NotasConsultaTodoInterface>
  > {
    return this.http.get('/notas/consultar/todo');
  }
}
