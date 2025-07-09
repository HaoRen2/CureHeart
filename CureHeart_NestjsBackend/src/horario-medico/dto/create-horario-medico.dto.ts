import { IsNumber, IsString } from 'class-validator';

export class CreateHorarioMedicoDto {

    @IsString()
    horaInicio: string;

    @IsString()
    horaFin: string;

}
