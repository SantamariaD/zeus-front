import { Action, createReducer, on } from "@ngrx/store";
import { NotasConsulta } from "../../interface/notas";
import { guardarNotaUsuario, notasUsuarioConsulta } from "./notas.actions";


const estadoInicial: Array<NotasConsulta> = [];

const notasConsultaReducer = createReducer(
    estadoInicial,
    on(notasUsuarioConsulta, (state, { notas }) => {
        return [
            ...state,
            ...notas
        ];
    }),
    on(guardarNotaUsuario, (state, { nota }) => {
        return [
            ...state,
            nota
        ];
    }),
)

export function reducer(state:  Array<NotasConsulta> | undefined, action: Action):  Array<NotasConsulta> {
    return notasConsultaReducer(state, action);
}