import { CreateDietasMedDto } from './dto/create-dietas-med.dto';
import { DietasMed } from './entities/dietas-med.entity';
import { Repository } from 'typeorm';
export declare class DietasMedService {
    private readonly dietasMedRepository;
    constructor(dietasMedRepository: Repository<DietasMed>);
    create(createDietasMedDto: CreateDietasMedDto): Promise<CreateDietasMedDto & DietasMed>;
    findAll(pacienteId: number): Promise<DietasMed[]>;
    remove(id: number): Promise<DietasMed>;
}
