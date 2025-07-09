export interface Cima {
  nregistro:                     string;
  nombre:                        string;
  pactivos:                      string;
  labtitular:                    string;
  cpresc:                        string;
  estado:                        Estado;
  comerc:                        boolean;
  receta:                        boolean;
  generico:                      boolean;
  conduc:                        boolean;
  triangulo:                     boolean;
  huerfano:                      boolean;
  biosimilar:                    boolean;
  nosustituible:                 FormaFarmaceutica;
  psum:                          boolean;
  notas:                         boolean;
  materialesInf:                 boolean;
  ema:                           boolean;
  docs:                          Doc[];
  fotos:                         Foto[];
  atcs:                          Atc[];
  principiosActivos:             Excipiente[];
  excipientes:                   Excipiente[];
  viasAdministracion:            FormaFarmaceutica[];
  presentaciones:                Presentacione[];
  formaFarmaceutica:             FormaFarmaceutica;
  formaFarmaceuticaSimplificada: FormaFarmaceutica;
  vtm:                           FormaFarmaceutica;
  dosis:                         string;
}

export interface Atc {
  codigo: string;
  nombre: string;
  nivel:  number;
}

export interface Doc {
  tipo:    number;
  url:     string;
  urlHtml: string;
  secc:    boolean;
  fecha:   number;
}

export interface Estado {
  aut: number;
}

export interface Excipiente {
  id:       number;
  nombre:   string;
  cantidad: string;
  unidad:   string;
  orden:    number;
  codigo?:  string;
}

export interface FormaFarmaceutica {
  id:     number;
  nombre: string;
}

export interface Foto {
  tipo:  string;
  url:   string;
  fecha: number;
}

export interface Presentacione {
  cn:     string;
  nombre: string;
  estado: Estado;
  comerc: boolean;
  psum:   boolean;
}
