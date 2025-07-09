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
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const medico_entity_1 = require("./entities/medico.entity");
const typeorm_2 = require("@nestjs/typeorm");
let MedicoService = class MedicoService {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
    }
    async create(createMedicoDto) {
        const medico = createMedicoDto;
        return await this.medicoRepository.save({
            ...medico,
        });
    }
    async getUniqueEspecialidades() {
        const especialidades = await this.medicoRepository
            .createQueryBuilder('Medico')
            .select('DISTINCT Medico.especialidad')
            .getRawMany();
        return especialidades.map((row) => row.especialidad);
    }
    async findAll() {
        return await this.medicoRepository.find();
    }
    async findMedicoByEspecialidad(especialidad) {
        return await this.medicoRepository
            .createQueryBuilder('Medico')
            .leftJoinAndSelect('Medico.citas', 'cita', 'cita.cumplido = :cumplido', { cumplido: false })
            .leftJoinAndSelect('Medico.horario', 'horarioMedico')
            .where('Medico.especialidad = :especialidad', { especialidad })
            .orderBy({
            'cita.date': 'ASC',
            'cita.time': 'ASC'
        })
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} medico`;
    }
    async findByEmail(userEmail) {
        return await this.medicoRepository
            .createQueryBuilder('Medico')
            .leftJoinAndSelect('Medico.citas', 'cita', 'cita.cumplido = :cumplido', { cumplido: false })
            .leftJoinAndSelect('Medico.horario', 'horarioMedico')
            .where('Medico.userEmail = :userEmail', { userEmail })
            .orderBy({
            'cita.date': 'ASC',
            'cita.time': 'ASC'
        })
            .getOne();
    }
    async update(id, updateMedicoDto) {
        return await this.medicoRepository.update(id, updateMedicoDto);
    }
    remove(id) {
        return `This action removes a #${id} medico`;
    }
};
exports.MedicoService = MedicoService;
exports.MedicoService = MedicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(medico_entity_1.Medico)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MedicoService);
//# sourceMappingURL=medico.service.js.map