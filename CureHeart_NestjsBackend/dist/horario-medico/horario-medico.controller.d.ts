import { HorarioMedicoService } from './horario-medico.service';
import { CreateHorarioMedicoDto } from './dto/create-horario-medico.dto';
import { UpdateHorarioMedicoDto } from './dto/update-horario-medico.dto';
export declare class HorarioMedicoController {
    private readonly horarioMedicoService;
    constructor(horarioMedicoService: HorarioMedicoService);
    create(createHorarioMedicoDto: CreateHorarioMedicoDto): Promise<CreateHorarioMedicoDto & import("./entities/horario-medico.entity").HorarioMedico>;
    findAll(): Promise<import("./entities/horario-medico.entity").HorarioMedico[]>;
    update(id: number, updateHorarioMedicoDto: UpdateHorarioMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
