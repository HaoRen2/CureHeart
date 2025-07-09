import { CreateCitaDto } from './create-cita.dto';
declare const UpdateCitaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCitaDto>>;
export declare class UpdateCitaDto extends UpdateCitaDto_base {
    descripcion: string;
    date: string;
    time: string;
    cumplido: boolean;
}
export {};
