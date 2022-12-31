import { createAction, props } from '@ngrx/store';
import { Nota } from '../../interface/notas';

const GUARDAR_NOTA = '[Nota] Guarda la información de la nota';

export const guardarNota = createAction(
    GUARDAR_NOTA,
  props<{ nota: Nota }>()
);