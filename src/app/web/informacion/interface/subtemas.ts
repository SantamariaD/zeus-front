import { InformacionFecha } from "./httpService";


export interface Subtema {
    base64: string;
    html: string;
    idNota: number;
    subtema: string;
}

export interface SubtemaConsulta extends InformacionFecha {
    base64: string;
    html: string;
    idNota: number;
    subtema: string;
    id?: number;
}

export interface ConsultaSubtemasNota {
    nota: {
        id: number;
        identificador: string;
        
        created_at: string;
    },
    subtemas: Array<SubtemaConsulta>;
}