import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicoDto } from './create-medico.dto';
import { IsDateString, IsOptional, IsString, MinLength } from 'class-validator';
import { HorarioMedico } from 'src/horario-medico/entities/horario-medico.entity';

export class UpdateMedicoDto extends PartialType(CreateMedicoDto) {
    
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
    @IsOptional()
    genero: string;

    @IsString()
    @IsOptional()
    telefono: string;

    @IsDateString()
    @IsOptional()
    fechaNacimiento: Date;

    @IsString()
    @IsOptional()
    especialidad: string;

    @IsOptional()
    horario: HorarioMedico;

}
