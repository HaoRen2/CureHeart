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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCitaDto = void 0;
const class_validator_1 = require("class-validator");
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const medico_entity_1 = require("../../medico/entities/medico.entity");
class CreateCitaDto {
}
exports.CreateCitaDto = CreateCitaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "nombrePaciente", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "nombreMedico", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "especialidad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCitaDto.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", paciente_entity_1.Paciente)
], CreateCitaDto.prototype, "paciente", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", medico_entity_1.Medico)
], CreateCitaDto.prototype, "medico", void 0);
//# sourceMappingURL=create-cita.dto.js.map