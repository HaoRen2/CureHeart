import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { Paciente } from '../../paciente/entities/paciente.entity';

export class CreateInformeDto {
  @IsString()
  name: string;

  @IsOptional()
  datos: Buffer;

  @IsDateString()
  date: Date;

  @IsString()
  @IsOptional()
  autor: string;

  @IsNumber()
  @IsOptional()
  paciente:Paciente;
}
