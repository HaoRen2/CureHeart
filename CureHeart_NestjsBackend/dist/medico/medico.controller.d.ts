import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    create(createMedicoDto: CreateMedicoDto): Promise<{
        nombre: string;
        apellido1: string;
        apellido2?: string;
        genero: string;
        telefono: string;
        fechaNacimiento: Date;
        especialidad: string;
        userEmail: string;
        horario: import("../horario-medico/entities/horario-medico.entity").HorarioMedico;
    } & import("./entities/medico.entity").Medico>;
    findAll(): Promise<import("./entities/medico.entity").Medico[]>;
    findOne(id: number): string;
    findOneByEmail(userEmail: string): Promise<import("./entities/medico.entity").Medico>;
    findByEspecialidad(especialidad: string): Promise<import("./entities/medico.entity").Medico[]>;
    getUniqueEspecialidades(): Promise<string[]>;
    update(id: number, updateMedicoDto: UpdateMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
