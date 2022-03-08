export interface Post {
    id: number;
    titulo: string;
    contenido: string;
    contenidoOriginal: string;
    contenidoMultimedia: string;
    tipoPublicacion: string;
    user: string;
    userAvatar: string;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort2 {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface PostResponse {
    content: Post[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort2;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}