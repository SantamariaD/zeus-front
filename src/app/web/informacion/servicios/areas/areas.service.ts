import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Areas, Subareas } from '../../interface/areas';
import { HttpClientServiceInterface } from '../../interface/httpService';
import { HttpclientService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private http: HttpclientService) {}

  consultarAreas(): Observable<HttpClientServiceInterface<Array<Areas>>> {
    return this.http.get<HttpClientServiceInterface<Array<Areas>>>(
      '/areas/consultar/areas'
    );
  }

  consultarSubareas(
    idArea: number
  ): Observable<HttpClientServiceInterface<Array<Subareas>>> {
    return this.http.get<HttpClientServiceInterface<Array<Subareas>>>(
      '/areas/consultar/subareas/' + idArea
    );
  }
}
