import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
export declare class CitasService {
    private readonly citaRepository;
    constructor(citaRepository: Repository<Cita>);
    create(createCitaDto: CreateCitaDto): Promise<CreateCitaDto & Cita>;
    findAllPaciente(id: number): Promise<Cita[]>;
    getCitasPorMedico(id: number): Promise<Cita[]>;
    findAllMedico(id: number): Promise<Cita[]>;
    findOne(id: number): Promise<Cita>;
    update(id: number, updateCitaDto: UpdateCitaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
