import { HorarioMedico } from "src/horario-medico/entities/horario-medico.entity";
export declare class CreateMedicoDto {
    nombre: string;
    apellido1: string;
    apellido2?: string;
    genero: string;
    telefono: string;
    fechaNacimiento: Date;
    especialidad: string;
    userEmail: string;
    horario: HorarioMedico;
}
