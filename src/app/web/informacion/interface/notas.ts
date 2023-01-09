import { InformacionFecha } from "./httpService";
import { ConsultaSubtemasNota } from "./subtemas";

export interface Nota {
    id: number;
    idAreaConocimiento: number;
    idSubarea: number;
    idUsuario: number;
    tema: string;
    identificador: string;
    notaSubtemas: ConsultaSubtemasNota;
}

export interface NotasConsulta {
    id: number;
    identificador: string;
    id_user: number;
    id_area_conocimiento: number;
    id_subarea: number;
    tema: string;
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
