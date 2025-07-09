import { Medico } from "src/medico/entities/medico.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
export declare class Cita {
    id: number;
    nombrePaciente: string;
    nombreMedico: string;
    especialidad: string;
    descripcion: string;
    date: string;
    time: string;
    cumplido: boolean;
    paciente: Paciente;
    medico: Medico;
}
