/// <reference types="node" />
import { Paciente } from '../../paciente/entities/paciente.entity';
export declare class Informe {
    id: number;
    name: string;
    date: Date;
    autor: string;
    datos: Buffer;
    paciente: Paciente;
}
