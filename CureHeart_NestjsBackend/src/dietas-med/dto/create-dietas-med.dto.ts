import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { Paciente } from '../../paciente/entities/paciente.entity';

export class CreateDietasMedDto {

    @IsString()
    nombre: string;

    @IsString()
    laboratorio: string;

    @IsString()
    dosis: string;

    @IsString()
    @IsOptional()
    foto: string;

    @IsString()
    observacion: string;

    @IsBoolean()
    afectaConduccion: boolean;

    @IsString()
    @IsOptional()
    linkhtml: string;

    @IsNumber()
    paciente: Paciente;
}
