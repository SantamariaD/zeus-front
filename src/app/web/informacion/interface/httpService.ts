export interface HttpClientServiceInterface<T> {
  code: number;
  message: string;
  payload: T;
}

export interface CargandoPeticionInterface {
  cargandoPeticion: boolean;
}
