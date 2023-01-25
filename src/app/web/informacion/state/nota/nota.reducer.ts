import { Action, createReducer, on } from "@ngrx/store";
import { Nota } from "../../interface/notas";
import { ConsultaSubtemasNota } from "../../interface/subtemas";
import { guardarNota, guardarNotaSubtemas } from "./nota.actions";


const estadoInicial: Nota = {
    idAreaConocimiento: 0,
    imagen: '',
    idUsuario: 0,
    tema: '',
    identificador: '',
    id: 0,
    notaSubtemas: {} as ConsultaSubtemasNota
}

const notaReducer = createReducer(
    estadoInicial,
    on(guardarNota, (state, { nota }) => {
        return {
            ...state,
            ...nota
        };
    }),
    on(guardarNotaSubtemas, (state, { notaSubtemas }) => {
        return {
            ...state,
            notaSubtemas: notaSubtemas
        };
    }),
)

export function reducer(state: Nota | undefined, action: Action): Nota {
    return notaReducer(state, action);
}