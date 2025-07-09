import { Medicamento } from './entities/medicamento.entity';
import { Repository } from 'typeorm';
export declare class MedicamentoService {
    private readonly medicamentoRepository;
    constructor(medicamentoRepository: Repository<Medicamento>);
    findAll(): Promise<Medicamento[]>;
    findByName(medicamento: string): Promise<Medicamento[]>;
}
