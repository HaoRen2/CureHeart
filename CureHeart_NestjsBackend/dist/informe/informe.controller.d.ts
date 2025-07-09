import { InformeService } from './informe.service';
import { Response } from 'express';
import { CreateInformeDto } from './dto/create-informe.dto';
export declare class InformeController {
    private readonly informeService;
    constructor(informeService: InformeService);
    create(informe: CreateInformeDto): Promise<CreateInformeDto & import("./entities/informe.entity").Informe>;
    downloadInforme(id: number, res: Response): Promise<void>;
    findByPacienteId(pacienteId: number): Promise<import("./entities/informe.entity").Informe[]>;
}
