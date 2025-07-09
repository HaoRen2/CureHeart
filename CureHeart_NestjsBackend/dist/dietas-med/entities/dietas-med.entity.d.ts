import { Paciente } from "src/paciente/entities/paciente.entity";
export declare class DietasMed {
    id: number;
    nombre: string;
    laboratorio: string;
    observacion: string;
    dosis: string;
    foto: string;
    afectaConduccion: boolean;
    linkhtml: string;
    paciente: Paciente;
}
