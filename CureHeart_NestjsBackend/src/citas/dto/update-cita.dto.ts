import { PartialType } from '@nestjs/mapped-types';
import { CreateCitaDto } from './create-cita.dto';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateCitaDto extends PartialType(CreateCitaDto) {
   
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsDateString()
    @IsOptional()
    date: string;

    @IsString()
    @IsOptional()
    time: string;

    @IsBoolean()
    @IsOptional()
    cumplido: boolean;
}
