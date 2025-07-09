import { IsDateString, IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePacienteDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellido1: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    apellido2?: string;

    @IsString()
    genero: string;

    @IsString()
    telefono: string;

    @IsDateString()
    fechaNacimiento: Date;

    @IsOptional()
    userEmail: string

}
