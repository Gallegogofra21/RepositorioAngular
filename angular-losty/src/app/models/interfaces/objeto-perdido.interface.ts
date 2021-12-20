import { Categoria } from "./categoria.interface";


export class ObjetoPerdidoDto {
    id!: string;
    name!: string;
    descripcion!: string;
    categoria!: Categoria[];
    localizacion!: string;
}