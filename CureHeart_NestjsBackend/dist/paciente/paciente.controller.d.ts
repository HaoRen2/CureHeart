import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    create(createPacienteDto: CreatePacienteDto): Promise<{
        nombre: string;
        apellido1: string;
        apellido2?: string;
        genero: string;
        telefono: string;
        fechaNacimiento: Date;
        userEmail: string;
    } & import("./entities/paciente.entity").Paciente>;
    findAll(): Promise<import("./entities/paciente.entity").Paciente[]>;
    findOne(id: number): Promise<import("./entities/paciente.entity").Paciente>;
    findByEmail(userEmail: string): Promise<import("./entities/paciente.entity").Paciente>;
    findByMedicoId(medicoId: number): Promise<import("./entities/paciente.entity").Paciente[]>;
    update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
