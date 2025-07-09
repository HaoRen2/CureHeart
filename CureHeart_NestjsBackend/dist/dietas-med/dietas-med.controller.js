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
exports.DietasMedController = void 0;
const common_1 = require("@nestjs/common");
const dietas_med_service_1 = require("./dietas-med.service");
const create_dietas_med_dto_1 = require("./dto/create-dietas-med.dto");
let DietasMedController = class DietasMedController {
    constructor(dietasMedService) {
        this.dietasMedService = dietasMedService;
    }
    create(createDietasMedDto) {
        return this.dietasMedService.create(createDietasMedDto);
    }
    findAll(pacienteId) {
        return this.dietasMedService.findAll(pacienteId);
    }
    remove(id) {
        return this.dietasMedService.remove(id);
    }
};
exports.DietasMedController = DietasMedController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dietas_med_dto_1.CreateDietasMedDto]),
    __metadata("design:returntype", void 0)
], DietasMedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('paciente/:pacienteId'),
    __param(0, (0, common_1.Param)('pacienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietasMedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietasMedController.prototype, "remove", null);
exports.DietasMedController = DietasMedController = __decorate([
    (0, common_1.Controller)('dietas-med'),
    __metadata("design:paramtypes", [dietas_med_service_1.DietasMedService])
], DietasMedController);
//# sourceMappingURL=dietas-med.controller.js.map