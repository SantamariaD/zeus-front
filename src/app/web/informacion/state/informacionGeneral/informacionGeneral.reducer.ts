import { Action, createReducer, on } from "@ngrx/store";
import { InformacionGeneral } from "../../interface/informacionGeneral";
import { guardarAreas, guardarSubareas } from "./informacionGeneral.actions";


const estadoInicial: InformacionGeneral = {
    areas: [],
    subareas: []
}

const informacionGeneralReducer = createReducer(
    estadoInicial,
    on(guardarAreas, (state, { areas }) => {
        return {
            ...state,
            areas
        };
    }),
    on(guardarSubareas, (state, { subareas }) => {
        return {
            ...state,
            subareas
        };
    }),
)

export function reducer(state: any | undefined, action: Action): any {
    return informacionGeneralReducer(state, action);
}