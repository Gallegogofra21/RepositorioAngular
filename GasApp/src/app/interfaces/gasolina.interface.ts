export interface GasolinaResponse {
    Fecha: string
    ListaEESSPrecio: Gasolina[]
    Nota: string
    ResultadoConsulta: string
  }
  
  export interface Gasolina {
    cP: string
    direccion: string
    horario: string
    municipio: string
    precioGasoleoA: string
    precioGasolina98E10: string
    precioGasolina98E5: string
    provincia: string
    rotulo: string
    iDEESS: string
    iDMunicipio: string
    iDProvincia: string
    iDCCAA: string
  }