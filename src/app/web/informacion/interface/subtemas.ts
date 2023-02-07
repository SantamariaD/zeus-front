import { InformacionFecha } from './httpService';

export interface Subtema {
  idNota: number;
  subtema: string;
  numeroSubtema: number;
} 

export interface SubtemaConsulta extends InformacionFecha {
  base64: string;
  html: string;
  idNota: number;
  subtema: string;
  id?: number;
}

export interface SubtituloConsulta {
  id: number;
  nota_id: number;
  subtema_id: number;
  subtitulo: string;
  html: string;
  numeroSubtitulo: number;
}

export interface ConsultaSubtemasNota {
  id?: number;
  idNota: number;
  uuid?: string;
  subtema: string;
  numeroSubtema: number;
  subtitulo?: Array<SubtituloConsulta>;
}

