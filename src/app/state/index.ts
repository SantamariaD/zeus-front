import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { CargandoPeticionInterface } from 'src/app/web/interface/httpService';
import { UsuarioInterface } from 'src/app/web/interface/usuario';
import * as fromUsuario from './usuario/usuario.reducer';
import * as fromHttp from './cargandoPeticion/cargandoPeticion.reducer'

export interface AppState {
  usuario: UsuarioInterface;
  cargandoPeticion: CargandoPeticionInterface;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
  cargandoPeticion: fromHttp.reducer
};

//*********SELECTORES******/

//***** Features selectores****/

//Spinn cargando
export const selectCargandoPeticion = createFeatureSelector<CargandoPeticionInterface>('cargandoPeticion');

//Login
export const selectLoginPeticion = createFeatureSelector<UsuarioInterface>('login');



//****** Creando selectores*****/
export const selectBanderaCargandoPeticion = createSelector(
  selectCargandoPeticion,
  (state: CargandoPeticionInterface) => state.cargandoPeticion
); 

//Login
export const selectBanderaLoginPeticion = createSelector(
  selectLoginPeticion,
  (state: UsuarioInterface) => state.login
); 
