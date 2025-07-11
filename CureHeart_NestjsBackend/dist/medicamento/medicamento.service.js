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
exports.MedicamentoService = void 0;
const common_1 = require("@nestjs/common");
const medicamento_entity_1 = require("./entities/medicamento.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let MedicamentoService = class MedicamentoService {
    constructor(medicamentoRepository) {
        this.medicamentoRepository = medicamentoRepository;
    }
    async findAll() {
        return await this.medicamentoRepository.find();
    }
    async findByName(medicamento) {
        const query = this.medicamentoRepository.createQueryBuilder('medicamento');
        const words = medicamento.split(' ');
        words.forEach(word => {
            query.andWhere('LOWER(medicamento.medicamento) LIKE LOWER(:word)', { word: `%${word}%` });
        });
        return await query.getMany();
    }
};
exports.MedicamentoService = MedicamentoService;
exports.MedicamentoService = MedicamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(medicamento_entity_1.Medicamento)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MedicamentoService);
//# sourceMappingURL=medicamento.service.js.map