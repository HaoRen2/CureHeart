import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { Cita } from 'src/citas/entities/cita.entity';
export declare class PacienteService {
    private readonly pacienteRepository;
    private citaRepository;
    constructor(pacienteRepository: Repository<Paciente>, citaRepository: Repository<Cita>);
    create(createPacienteDto: CreatePacienteDto): Promise<{
        nombre: string;
        apellido1: string;
        apellido2?: string;
        genero: string;
        telefono: string;
        fechaNacimiento: Date;
        userEmail: string;
    } & Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: number): Promise<Paciente>;
    getPacientesPorMedicoId(medicoId: number): Promise<Paciente[]>;
    findByEmail(userEmail: string): Promise<Paciente>;
    update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
