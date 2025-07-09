import { Repository } from 'typeorm';
import { Informe } from './entities/informe.entity';
import { CreateInformeDto } from './dto/create-informe.dto';
export declare class InformeService {
    private informeRepository;
    constructor(informeRepository: Repository<Informe>);
    getFileById(id: number): Promise<Informe>;
    getFileByPacienteId(pacienteId: number): Promise<Informe[]>;
    savePdf(informe: CreateInformeDto): Promise<CreateInformeDto & Informe>;
}
