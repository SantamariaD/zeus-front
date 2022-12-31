import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuario from './usuario/usuario.reducer';
import * as fromHttp from './cargandoPeticion/cargandoPeticion.reducer'
import * as fromNota from './nota/nota.reducer'
import { UsuarioInterface } from '../interface/usuario';
import { CargandoPeticionInterface } from '../interface/httpService';
import { Nota } from '../interface/notas';

export interface AppState {
  usuario: UsuarioInterface;
  nota: Nota;
  cargandoPeticion: CargandoPeticionInterface;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  cargandoPeticion: fromHttp.reducer,
  nota: fromNota.reducer
};

//*********SELECTORES******/

//***** Features selectores****/

// Spinn cargando
export const selectCargandoPeticion = createFeatureSelector<CargandoPeticionInterface>('cargandoPeticion');

// Login
export const selectLoginPeticion = createFeatureSelector<UsuarioInterface>('login');

// NoTA
export const selectNota = createFeatureSelector<Nota>('nota');



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
