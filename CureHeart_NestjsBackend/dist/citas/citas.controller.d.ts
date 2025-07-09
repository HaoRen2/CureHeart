import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
export declare class CitasController {
    private readonly citasService;
    constructor(citasService: CitasService);
    create(createCitaDto: CreateCitaDto): Promise<CreateCitaDto & import("./entities/cita.entity").Cita>;
    findAllPaciente(id: number): Promise<import("./entities/cita.entity").Cita[]>;
    findAllMedico(id: number): Promise<import("./entities/cita.entity").Cita[]>;
    findOne(id: number): Promise<import("./entities/cita.entity").Cita>;
    update(id: number, updateCitaDto: UpdateCitaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
