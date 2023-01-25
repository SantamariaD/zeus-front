import { InformacionFecha } from "./httpService";
import { ConsultaSubtemasNota } from "./subtemas";

export interface Nota {
    id?: number;
    idAreaConocimiento: number;
    idUsuario: number;
    tema: string;
    identificador: string;
    imagen: string;
    notaSubtemas: ConsultaSubtemasNota;
}

export interface NotasConsulta {
    id: number;
    uuid: string;
    user_id: number;
    area_id: number;
    area: string;
    tema: string;
    imagen: string;
    leido: number;
    created_at: string;
    updated_at: string;
}

export interface NotasConponentInterface {
    tema: string;
    nombreArchivo: string;
    archivoBinario: string;
    tipoArchivo: string;
}

export interface GeneradorNotas {
    base64: string;
    html: string;
}

export interface NotaCard {
    idNota: number;
    tema: string;
}
