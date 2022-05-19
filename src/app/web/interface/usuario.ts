export interface UsuarioInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    rol: string;
    login: boolean;
    email_verified_at?: boolean;
}