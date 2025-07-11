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
exports.InformeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const informe_entity_1 = require("./entities/informe.entity");
let InformeService = class InformeService {
    constructor(informeRepository) {
        this.informeRepository = informeRepository;
    }
    async getFileById(id) {
        return await this.informeRepository.findOneBy({ id });
    }
    async getFileByPacienteId(pacienteId) {
        return await this.informeRepository.find({
            where: { paciente: { id: pacienteId } },
            relations: ['paciente'],
        });
    }
    async savePdf(informe) {
        return await this.informeRepository.save(informe);
    }
};
exports.InformeService = InformeService;
exports.InformeService = InformeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(informe_entity_1.Informe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InformeService);
//# sourceMappingURL=informe.service.js.map