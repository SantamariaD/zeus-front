import { createAction, props } from '@ngrx/store';
import { Nota } from '../../interface/notas';
import { ConsultaSubtemasNota } from '../../interface/subtemas';

const GUARDAR_NOTA = '[Nota] Guarda la información de la nota';

const GUARDAR_NOTA_SUBTEMAS = '[Nota] Guarda la información de los subtemas de la nota';

export const guardarNota = createAction(
    GUARDAR_NOTA,
  props<{ nota: Nota }>()
);

export const guardarNotaSubtemas = createAction(
  GUARDAR_NOTA_SUBTEMAS,
props<{ notaSubtemas: ConsultaSubtemasNota }>()
);