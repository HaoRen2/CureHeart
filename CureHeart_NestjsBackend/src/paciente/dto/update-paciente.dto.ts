import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.dto';
import { IsDate, IsObject, IsOptional, IsString, MinLength } from 'class-validator';
import { Cita } from '../../citas/entities/cita.entity';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {

  @IsString()
  @MinLength(1)
  @IsOptional()
  nombre: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  apellido1: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  apellido2?: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  genero: string;

  @IsString()
  @IsOptional()
  telefono: string;

  @IsDate()
  @IsOptional()
  fechaNacimiento: Date;

  @IsOptional()
  citas: Cita[];

}
