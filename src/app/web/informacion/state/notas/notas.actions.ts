import { createAction, props } from "@ngrx/store";
import { NotasConsulta } from "../../interface/notas";

const GUARDAR_CONSULTA_NOTAS_USUARIO = '[Nota] Guarda todas la notas creadas por el usuario';

const GUARDAR__NOTA_USUARIO = '[Nota] Guarda la nota creada por el usuario';


export const notasUsuarioConsulta = createAction(
    GUARDAR_CONSULTA_NOTAS_USUARIO,
  props<{ notas: Array<NotasConsulta> }>()
  );

export const guardarNotaUsuario = createAction(
    GUARDAR__NOTA_USUARIO,
  props<{ nota: NotasConsulta }>()
  );