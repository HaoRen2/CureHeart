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
exports.HorarioMedicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const horario_medico_entity_1 = require("./entities/horario-medico.entity");
let HorarioMedicoService = class HorarioMedicoService {
    constructor(horiarioRepository) {
        this.horiarioRepository = horiarioRepository;
    }
    async create(createHorarioMedicoDto) {
        return await this.horiarioRepository.save(createHorarioMedicoDto);
    }
    async findAll() {
        return await this.horiarioRepository.find();
    }
    async update(id, updateHorarioMedicoDto) {
        return await this.horiarioRepository.update(id, updateHorarioMedicoDto);
    }
    remove(id) {
        return `This action removes a #${id} horarioMedico`;
    }
};
exports.HorarioMedicoService = HorarioMedicoService;
exports.HorarioMedicoService = HorarioMedicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(horario_medico_entity_1.HorarioMedico)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HorarioMedicoService);
//# sourceMappingURL=horario-medico.service.js.map