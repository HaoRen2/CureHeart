import { DietasMedService } from './dietas-med.service';
import { CreateDietasMedDto } from './dto/create-dietas-med.dto';
export declare class DietasMedController {
    private readonly dietasMedService;
    constructor(dietasMedService: DietasMedService);
    create(createDietasMedDto: CreateDietasMedDto): Promise<CreateDietasMedDto & import("./entities/dietas-med.entity").DietasMed>;
    findAll(pacienteId: number): Promise<import("./entities/dietas-med.entity").DietasMed[]>;
    remove(id: number): Promise<import("./entities/dietas-med.entity").DietasMed>;
}
