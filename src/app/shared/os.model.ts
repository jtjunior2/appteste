export interface Os {
    codigoOS: number;
    dataOS: Date;
    anoSafra: string;
    periodoProducao: string;
    centroCusto: string;
    aglomerado: string;
    fazenda: string;
    operacao: string;
    aeronave?: string;
    piloto?: string;
    vazao: number;
    talhoes: any[];
    produtos: Produto[];
  }
  
  export interface Talhao {
    codigoTalhao: string;
    variedadePIMS: string;
    descricaoVariedade: string;
    hectaresPlantio: number;
    hectaresAplicados: number;
  }
  
  export interface Produto {
    codigoProduto: string;
    descricaoProduto: string;
    unidadeMedida: string;
    areaAplicada: number;
    dosagem: number;
    tipoMaquina: string;
  }