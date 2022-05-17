import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuarioInterface } from 'src/app/interface/usuario';
import * as fromUsuario from './usuario/usuario.reducer';

export interface AppState {
  usuario: UsuarioInterface;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuario: fromUsuario.reducer,
};

//*********SELECTORES******/
/* export const selectProducto = createFeatureSelector<EstadoProductosInterface>('productos');
export const selectCargandoPeticion = createFeatureSelector<CargandoPeticionInterface>('cargandoPeticion');

export const selectProductoState = createSelector(
  selectProducto,
  (state: EstadoProductosInterface) => state.productosStock
);

export const selectBanderaGuardarProducto = createSelector(
  selectProducto,
  (state: EstadoProductosInterface) => state.banderaGuardarProducto
);

export const selectBanderaCargandoPeticion = createSelector(
  selectCargandoPeticion,
  (state: CargandoPeticionInterface) => state.cargandoPeticion
); */
