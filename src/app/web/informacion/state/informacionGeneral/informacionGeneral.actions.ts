import { createAction, props } from '@ngrx/store';
import { Areas, Subareas } from '../../interface/areas';

const GUARDAR_AREAS = '[Area] Guarda las areas';

const GUARDAR_SUBAREAS = '[Subarea] Guarda las subareas';


export const guardarAreas = createAction(
    GUARDAR_AREAS,
  props<{ areas: Array<Areas> }>()
);

export const guardarSubareas = createAction(
    GUARDAR_SUBAREAS,
  props<{ subareas: Array<Subareas> }>()
);