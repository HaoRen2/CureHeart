import { MedicamentoService } from './medicamento.service';
export declare class MedicamentoController {
    private readonly medicamentoService;
    constructor(medicamentoService: MedicamentoService);
    findAll(): Promise<import("./entities/medicamento.entity").Medicamento[]>;
    findByName(name: string): Promise<import("./entities/medicamento.entity").Medicamento[]>;
}
