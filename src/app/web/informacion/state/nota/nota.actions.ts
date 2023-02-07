import { createAction, props } from '@ngrx/store';
import { Nota, NotasConsulta } from '../../interface/notas';
import { ConsultaSubtemasNota, SubtituloConsulta } from '../../interface/subtemas';

const GUARDAR_NOTA = '[Nota] Guarda la información de la nota';

const GUARDAR_NOTA_SUBTEMAS = '[Nota] Guarda la información de los subtemas de la nota';

const GUARDAR__SUBTEMA = '[Nota] Guarda subtema creado por el usuario';

const GUARDAR__SUBTITULO = '[Nota] Guarda subtitulo creado por el usuario';

export const guardarNota = createAction(
    GUARDAR_NOTA,
  props<{ nota: Nota }>()
);

export const guardarNotaSubtemas = createAction(
  GUARDAR_NOTA_SUBTEMAS,
props<{ notaInformacion: NotasConsulta }>()
);

export const guardarSubtemaUsuario = createAction(
  GUARDAR__SUBTEMA,
props<{ subtema: ConsultaSubtemasNota }>()
);

export const guardarSubtituloUsuario = createAction(
  GUARDAR__SUBTITULO,
props<{ subtitulo: SubtituloConsulta }>()
);

