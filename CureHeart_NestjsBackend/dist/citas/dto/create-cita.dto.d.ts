import { Paciente } from '../../paciente/entities/paciente.entity';
import { Medico } from '../../medico/entities/medico.entity';
export declare class CreateCitaDto {
    nombrePaciente: string;
    nombreMedico: string;
    especialidad: string;
    descripcion: string;
    date: string;
    time: string;
    paciente: Paciente;
    medico: Medico;
}
