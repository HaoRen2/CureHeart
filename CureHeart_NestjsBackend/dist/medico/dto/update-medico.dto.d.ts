import { CreateMedicoDto } from './create-medico.dto';
import { HorarioMedico } from 'src/horario-medico/entities/horario-medico.entity';
declare const UpdateMedicoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMedicoDto>>;
export declare class UpdateMedicoDto extends UpdateMedicoDto_base {
    nombre: string;
    apellido1: string;
    apellido2?: string;
    genero: string;
    telefono: string;
    fechaNacimiento: Date;
    especialidad: string;
    horario: HorarioMedico;
}
export {};
