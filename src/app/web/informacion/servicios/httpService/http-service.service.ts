import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  peticionActivaAction,
  peticionInactivaAction,
} from '../../state/cargandoPeticion/cargandoPeticion.actions';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(private http: HttpClient, private store: Store) {}

  post<T>(url: string, body?: any): Observable<T> {
    const urlBase = environment.production
      ? environment.urls.backProduction
      : environment.urls.backDevelop;
    const token = localStorage.getItem('token') as string;
    return this.http
      .post<T>(urlBase + url, body || {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      .pipe(
        finalize(() => {
          this.store.dispatch(peticionActivaAction());
          setTimeout(() => {
            this.store.dispatch(peticionInactivaAction());
          }, 1000);
        })
      );
  }

  get<T>(url: string): Observable<T> {
    const urlBase = environment.production
      ? environment.urls.backProduction
      : environment.urls.backDevelop;
    const token = localStorage.getItem('token') as string;
    setTimeout(() => this.store.dispatch(peticionActivaAction()), 0);

    return this.http
      .get<T>(urlBase + url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.store.dispatch(peticionInactivaAction());
          }, 1000);
        })
      );
  }
}
