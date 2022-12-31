import { Action, createReducer, on } from "@ngrx/store";
import { Nota } from "../../interface/notas";
import { guardarNota } from "./nota.actions";


const estadoInicial: Nota = {
    idAreaConocimiento: 0,
    idSubarea: 0,
    idUsuario: 0,
    tema: '',
    identificador: ''
}

const notaReducer = createReducer(
    estadoInicial,
    on(guardarNota, (state, { nota }) => {
        return {
            ...state,
            ...nota
        };
    }),
)

export function reducer(state: Nota | undefined, action: Action): Nota {
    return notaReducer(state, action);
}