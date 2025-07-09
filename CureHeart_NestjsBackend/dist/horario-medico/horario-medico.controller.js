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
exports.HorarioMedicoController = void 0;
const common_1 = require("@nestjs/common");
const horario_medico_service_1 = require("./horario-medico.service");
const create_horario_medico_dto_1 = require("./dto/create-horario-medico.dto");
const update_horario_medico_dto_1 = require("./dto/update-horario-medico.dto");
let HorarioMedicoController = class HorarioMedicoController {
    constructor(horarioMedicoService) {
        this.horarioMedicoService = horarioMedicoService;
    }
    create(createHorarioMedicoDto) {
        return this.horarioMedicoService.create(createHorarioMedicoDto);
    }
    findAll() {
        return this.horarioMedicoService.findAll();
    }
    update(id, updateHorarioMedicoDto) {
        return this.horarioMedicoService.update(id, updateHorarioMedicoDto);
    }
    remove(id) {
        return this.horarioMedicoService.remove(id);
    }
};
exports.HorarioMedicoController = HorarioMedicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_horario_medico_dto_1.CreateHorarioMedicoDto]),
    __metadata("design:returntype", void 0)
], HorarioMedicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HorarioMedicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_horario_medico_dto_1.UpdateHorarioMedicoDto]),
    __metadata("design:returntype", void 0)
], HorarioMedicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HorarioMedicoController.prototype, "remove", null);
exports.HorarioMedicoController = HorarioMedicoController = __decorate([
    (0, common_1.Controller)('horario-medico'),
    __metadata("design:paramtypes", [horario_medico_service_1.HorarioMedicoService])
], HorarioMedicoController);
//# sourceMappingURL=horario-medico.controller.js.map