import { IsBoolean, IsDateString, IsNumber, IsString } from "class-validator";
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Medico } from '../../medico/entities/medico.entity';

export class CreateCitaDto {

    @IsString()
    nombrePaciente: string;

    @IsString()
    nombreMedico: string;

    @IsString()
    especialidad: string;

    @IsString()
    descripcion: string;

    @IsDateString()
    date: string;

    @IsString()
    time: string;

    @IsNumber()
    paciente: Paciente;

    @IsNumber()
    medico: Medico;


}
