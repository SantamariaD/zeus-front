export interface HttpClientServiceInterface<T> {
  code: number;
  message: string;
  payload: T;
}

export interface CargandoPeticionInterface {
  cargandoPeticion: boolean;
}

export interface InformacionFecha {
  created_at: string;
  updated_at: string;
}
