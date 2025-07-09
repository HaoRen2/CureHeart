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
exports.CitasController = void 0;
const common_1 = require("@nestjs/common");
const citas_service_1 = require("./citas.service");
const create_cita_dto_1 = require("./dto/create-cita.dto");
const update_cita_dto_1 = require("./dto/update-cita.dto");
let CitasController = class CitasController {
    constructor(citasService) {
        this.citasService = citasService;
    }
    create(createCitaDto) {
        return this.citasService.create(createCitaDto);
    }
    findAllPaciente(id) {
        return this.citasService.findAllPaciente(id);
    }
    findAllMedico(id) {
        return this.citasService.findAllMedico(id);
    }
    findOne(id) {
        return this.citasService.findOne(id);
    }
    update(id, updateCitaDto) {
        return this.citasService.update(id, updateCitaDto);
    }
    remove(id) {
        return this.citasService.remove(id);
    }
};
exports.CitasController = CitasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cita_dto_1.CreateCitaDto]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('paciente/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "findAllPaciente", null);
__decorate([
    (0, common_1.Get)('medico/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "findAllMedico", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cita_dto_1.UpdateCitaDto]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CitasController.prototype, "remove", null);
exports.CitasController = CitasController = __decorate([
    (0, common_1.Controller)('citas'),
    __metadata("design:paramtypes", [citas_service_1.CitasService])
], CitasController);
//# sourceMappingURL=citas.controller.js.map