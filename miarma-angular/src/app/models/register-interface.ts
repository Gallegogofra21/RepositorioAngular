export interface RegisterResponse {
    id: string;
    username: string;
    email: string;
    telefono?: any;
    avatar: string;
    perfil: string;
    fecha: string;
    posts: any[];
    listaPeticiones: any[];
    followers: any[];
}

export class RegisterDto {
    username!: string;
    email!:    string;
    password!: string;
    password2!: string;
    fechaNacimiento!: string;
}