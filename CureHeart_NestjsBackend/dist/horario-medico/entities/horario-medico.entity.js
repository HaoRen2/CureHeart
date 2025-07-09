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
exports.HorarioMedico = void 0;
const medico_entity_1 = require("../../medico/entities/medico.entity");
const typeorm_1 = require("typeorm");
let HorarioMedico = class HorarioMedico {
};
exports.HorarioMedico = HorarioMedico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HorarioMedico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], HorarioMedico.prototype, "horaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], HorarioMedico.prototype, "horaFin", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medico_entity_1.Medico, medico => medico.horario),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", medico_entity_1.Medico)
], HorarioMedico.prototype, "medico", void 0);
exports.HorarioMedico = HorarioMedico = __decorate([
    (0, typeorm_1.Entity)()
], HorarioMedico);
//# sourceMappingURL=horario-medico.entity.js.map