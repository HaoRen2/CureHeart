import { CreateHorarioMedicoDto } from './create-horario-medico.dto';
declare const UpdateHorarioMedicoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateHorarioMedicoDto>>;
export declare class UpdateHorarioMedicoDto extends UpdateHorarioMedicoDto_base {
    horaInicio: string;
    horaFin: string;
}
export {};
