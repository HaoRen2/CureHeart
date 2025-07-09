"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paciente_entity_1 = require("./entities/paciente.entity");
const typeorm_2 = require("typeorm");
const cita_entity_1 = require("../citas/entities/cita.entity");
let PacienteService = class PacienteService {
    constructor(pacienteRepository, citaRepository) {
        this.pacienteRepository = pacienteRepository;
        this.citaRepository = citaRepository;
    }
    async create(createPacienteDto) {
        const paciente = createPacienteDto;
        return await this.pacienteRepository.save({
            ...paciente,
        });
    }
    async findAll() {
        return await this.pacienteRepository.find();
    }
    async findOne(id) {
        return await this.pacienteRepository.findOneBy({ id });
    }
    async getPacientesPorMedicoId(medicoId) {
        return this.pacienteRepository.createQueryBuilder('paciente')
            .innerJoin('paciente.citas', 'cita', 'cita.medicoId = :medicoId', { medicoId })
            .getMany();
    }
    async findByEmail(userEmail) {
        return await this.pacienteRepository
            .createQueryBuilder('Paciente')
            .leftJoinAndSelect('Paciente.citas', 'cita', 'cita.cumplido = :cumplido', { cumplido: false })
            .where('Paciente.userEmail = :userEmail', { userEmail })
            .orderBy({
            'cita.date': 'ASC',
            'cita.time': 'ASC'
        })
            .getOne();
    }
    async update(id, updatePacienteDto) {
        return await this.pacienteRepository.update(id, updatePacienteDto);
    }
    async remove(id) {
        const paciente = await this.pacienteRepository.findOneBy({ id });
        return await this.pacienteRepository.delete(paciente);
    }
};
exports.PacienteService = PacienteService;
exports.PacienteService = PacienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __param(1, (0, typeorm_1.InjectRepository)(cita_entity_1.Cita)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PacienteService);
//# sourceMappingURL=paciente.service.js.map