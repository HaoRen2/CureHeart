import { IsDateString, IsOptional, IsString, MinLength } from "class-validator";
import { HorarioMedico } from "src/horario-medico/entities/horario-medico.entity";

export class CreateMedicoDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellido1: string;

    @IsString()
    @IsOptional()
    apellido2?: string;

    @IsString()
    genero: string;

    @IsString()
    telefono: string;

    @IsDateString()
    fechaNacimiento: Date;

    @IsString()
    especialidad: string;

    @IsOptional()
    userEmail: string

    @IsOptional()
    horario: HorarioMedico

}
