import { InformacionFecha } from "./httpService";

export interface Areas extends InformacionFecha {
    id: number;
    area: string;
}

export interface Subareas extends InformacionFecha {
    id: number;
    id_area: number;
    subarea: string;
}