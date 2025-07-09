import { PartialType } from '@nestjs/mapped-types';
import { CreateHorarioMedicoDto } from './create-horario-medico.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateHorarioMedicoDto extends PartialType(CreateHorarioMedicoDto) {
   
    @IsString()
    @IsOptional()
    horaInicio: string;

    @IsString()
    @IsOptional()
    horaFin: string;
}
