import { Action, createReducer, on } from '@ngrx/store';
import { NotasConsulta } from '../../interface/notas';
import { ConsultaSubtemasNota } from '../../interface/subtemas';
import {
  guardarNota,
  guardarNotaSubtemas,
  guardarSubtemaUsuario,
  guardarSubtituloUsuario,
} from './nota.actions';

const estadoInicial: NotasConsulta = {} as NotasConsulta;

const notaReducer = createReducer(
  estadoInicial,
  on(guardarNota, (state, { nota }) => {
    return {
      ...state,
      ...nota,
    };
  }),
  on(guardarNotaSubtemas, (state, { notaInformacion }) => {
    return {
      ...state,
      ...notaInformacion,
    };
  }),
  on(guardarSubtemaUsuario, (state, { subtema }) => {
    return {
      ...state,
      subtemas: [...state.subtemas, subtema],
    };
  }),
  on(guardarSubtituloUsuario, (state, { subtitulo }) => {
    let subtemaActualizar = 0;
    state.subtemas.map((subtemaFind, index) => {
      if (subtemaFind.id == subtitulo.subtema_id) {
        subtemaActualizar = index;
      }
    });
    state.subtemas[subtemaActualizar].subtitulo?.push(subtitulo);
    return {
      ...state,
    };
  })
);

export function reducer(
  state: NotasConsulta | undefined,
  action: Action
): NotasConsulta {
  return notaReducer(state, action);
}
