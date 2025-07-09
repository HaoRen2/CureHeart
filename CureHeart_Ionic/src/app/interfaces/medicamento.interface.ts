export interface Medicamentos {
  Medicamentos: Medicamento[]
}

export interface Medicamento {
  numRegistro: string
  medicamento: string
  laboratorio: string
  fechaAut: string
  estado: string
  fechaEstado: string
  codATC: string
  principiosActivos: string
  NPActivos: string
  comercializado: string
  trianguloAmarillo: string
  observaciones: string
  afectaConduccion: string
  problemasSuministro: string
}

export interface MiMedicamento {
  id?    : number,
  nombre: string;
  laboratorio: string;
  foto: string;
  dosis: string;
  observacion: string
  afectaConduccion: boolean;
  linkhtml: string;
  paciente: number;
}
