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
exports.DietasMedService = void 0;
const common_1 = require("@nestjs/common");
const dietas_med_entity_1 = require("./entities/dietas-med.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DietasMedService = class DietasMedService {
    constructor(dietasMedRepository) {
        this.dietasMedRepository = dietasMedRepository;
    }
    async create(createDietasMedDto) {
        return await this.dietasMedRepository.save(createDietasMedDto);
    }
    async findAll(pacienteId) {
        return await this.dietasMedRepository.find({
            where: { paciente: { id: pacienteId } },
            relations: ['paciente']
        });
    }
    async remove(id) {
        const dietas = await this.dietasMedRepository.findOneBy({ id });
        if (!dietas) {
            throw new Error(`La dieta con ID ${id} no existe`);
        }
        return await this.dietasMedRepository.remove(dietas);
    }
};
exports.DietasMedService = DietasMedService;
exports.DietasMedService = DietasMedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(dietas_med_entity_1.DietasMed)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DietasMedService);
//# sourceMappingURL=dietas-med.service.js.map