import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';
export declare class MedicoService {
    private readonly medicoRepository;
    constructor(medicoRepository: Repository<Medico>);
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
    } & Medico>;
    getUniqueEspecialidades(): Promise<string[]>;
    findAll(): Promise<Medico[]>;
    findMedicoByEspecialidad(especialidad: string): Promise<Medico[]>;
    findOne(id: number): string;
    findByEmail(userEmail: string): Promise<Medico>;
    update(id: number, updateMedicoDto: UpdateMedicoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
