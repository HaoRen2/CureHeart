import { CreateHorarioMedicoDto } from './dto/create-horario-medico.dto';
import { UpdateHorarioMedicoDto } from './dto/update-horario-medico.dto';
import { Repository } from 'typeorm';
import { HorarioMedico } from './entities/horario-medico.entity';
export declare class HorarioMedicoService {
    private readonly horiarioRepository;
    constructor(horiarioRepository: Repository<HorarioMedico>);
    create(createHorarioMedicoDto: CreateHorarioMedicoDto): Promise<CreateHorarioMedicoDto & HorarioMedico>;
    findAll(): Promise<HorarioMedico[]>;
    update(id: number, updateHorarioMedicoDto: UpdateHorarioMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
