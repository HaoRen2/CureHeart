/// <reference types="node" />
import { Paciente } from '../../paciente/entities/paciente.entity';
export declare class CreateInformeDto {
    name: string;
    datos: Buffer;
    date: Date;
    autor: string;
    paciente: Paciente;
}
