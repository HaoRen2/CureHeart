import { CreatePacienteDto } from './create-paciente.dto';
import { Cita } from '../../citas/entities/cita.entity';
declare const UpdatePacienteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePacienteDto>>;
export declare class UpdatePacienteDto extends UpdatePacienteDto_base {
    nombre: string;
    apellido1: string;
    apellido2?: string;
    email: string;
    genero: string;
    telefono: string;
    fechaNacimiento: Date;
    citas: Cita[];
}
export {};
