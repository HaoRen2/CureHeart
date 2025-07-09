import { Paciente } from '../../paciente/entities/paciente.entity';
export declare class CreateDietasMedDto {
    nombre: string;
    laboratorio: string;
    dosis: string;
    foto: string;
    observacion: string;
    afectaConduccion: boolean;
    linkhtml: string;
    paciente: Paciente;
}
