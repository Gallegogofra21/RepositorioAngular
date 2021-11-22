export interface Lista {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    name: string;
    poster_path?: any;
}

export interface ListaResponse {
    page: number;
    results: Lista[];
    total_pages: number;
    total_results: number;
}

export class ListaDto {
    name!: string;
    description!: string;
    language: string = "es-ES"
}

export interface ListaDtoResponse {
    status_code: number;
    status_message: string;
    success: boolean;
    list_id: number;
}