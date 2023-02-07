import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuario from './usuario/usuario.reducer';
import * as fromHttp from './cargandoPeticion/cargandoPeticion.reducer'
import * as fromNota from './nota/nota.reducer'
import * as fromNotasConsulta from './notas/notas.reducer'
import * as fromInformacionGeneral from './informacionGeneral/informacionGeneral.reducer'
import { UsuarioInterface } from '../interface/usuario';
import { CargandoPeticionInterface } from '../interface/httpService';
import { Nota, NotasConsulta } from '../interface/notas';
import { InformacionGeneral } from '../interface/informacionGeneral';

export interface AppState {
  usuario: UsuarioInterface;
  nota: NotasConsulta;
  notas: Array<NotasConsulta>;
  cargandoPeticion: CargandoPeticionInterface;
  informacionGeneral: InformacionGeneral;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  cargandoPeticion: fromHttp.reducer,
  nota: fromNota.reducer,
  notas: fromNotasConsulta.reducer,
  informacionGeneral: fromInformacionGeneral.reducer
};

//*********SELECTORES******/

//***** Features selectores****/

// Spinn cargando
export const selectCargandoPeticion = createFeatureSelector<CargandoPeticionInterface>('cargandoPeticion');

// Login
export const selectLoginPeticion = createFeatureSelector<UsuarioInterface>('login');

// Nota
export const selectNota = createFeatureSelector<Nota>('nota');

// Nota subtemas
export const selectNotaSubtemas = createFeatureSelector<NotasConsulta>('nota');

// Notas usuario consulta
export const selectNotasUsuarioConsulta = createFeatureSelector<Array<NotasConsulta>>('notas');

// Areas
export const selectAreasC = createFeatureSelector<InformacionGeneral>('informacionGeneral');

// Subareas
export const selectSubareasC = createFeatureSelector<InformacionGeneral>('informacionGeneral');



//****** Creando selectores*****/
export const selectBanderaCargandoPeticion = createSelector(
  selectCargandoPeticion,
  (state: CargandoPeticionInterface) => state.cargandoPeticion
); 

// Login
export const selectBanderaLoginPeticion = createSelector(
  selectLoginPeticion,
  (state: UsuarioInterface) => state.login
); 

// Nota
export const selectNotaInformacion = createSelector(
  selectNota,
  (state: Nota) => state
); 


// Nota
export const selectNotaSubtemasInformacion = createSelector(
  selectNotaSubtemas,
  (state: NotasConsulta) => state
); 

// Nota consulta
export const selectNotasConsulta = createSelector(
  selectNotasUsuarioConsulta,
  (state: Array<NotasConsulta>) => state
); 

// Areas
export const selectAreas = createSelector(
  selectAreasC,
  (state: InformacionGeneral) => state.areas
);

// Subareas
export const selectSubareas = createSelector(
  selectAreasC,
  (state: InformacionGeneral) => state.subareas
);
