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
exports.InformeController = void 0;
const common_1 = require("@nestjs/common");
const informe_service_1 = require("./informe.service");
const create_informe_dto_1 = require("./dto/create-informe.dto");
const buffer_1 = require("buffer");
let InformeController = class InformeController {
    constructor(informeService) {
        this.informeService = informeService;
    }
    async create(informe) {
        return this.informeService.savePdf(informe);
    }
    async downloadInforme(id, res) {
        const informe = await this.informeService.getFileById(id);
        const buffer = buffer_1.Buffer.from(informe.datos.toString(), 'base64');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=informe_${id}.pdf`);
        res.send(buffer);
    }
    async findByPacienteId(pacienteId) {
        return this.informeService.getFileByPacienteId(pacienteId);
    }
};
exports.InformeController = InformeController;
__decorate([
    (0, common_1.Post)('upload'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_informe_dto_1.CreateInformeDto]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "downloadInforme", null);
__decorate([
    (0, common_1.Get)('paciente/:pacienteId'),
    __param(0, (0, common_1.Param)('pacienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "findByPacienteId", null);
exports.InformeController = InformeController = __decorate([
    (0, common_1.Controller)('informe'),
    __metadata("design:paramtypes", [informe_service_1.InformeService])
], InformeController);
//# sourceMappingURL=informe.controller.js.map