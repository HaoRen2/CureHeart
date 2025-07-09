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
exports.Paciente = void 0;
const cita_entity_1 = require("../../citas/entities/cita.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const informe_entity_1 = require("../../informe/entities/informe.entity");
const dietas_med_entity_1 = require("../../dietas-med/entities/dietas-med.entity");
let Paciente = class Paciente {
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Paciente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "apellido1", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Paciente.prototype, "apellido2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Paciente.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Paciente.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => informe_entity_1.Informe, (informe) => informe.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "informes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, (cita) => cita.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "citas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dietas_med_entity_1.DietasMed, (dietasMed) => dietasMed.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "dietasMed", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.Users, (user) => user.paciente),
    (0, typeorm_1.JoinColumn)({ name: 'userEmail', referencedColumnName: 'email' }),
    __metadata("design:type", user_entity_1.Users)
], Paciente.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "userEmail", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)()
], Paciente);
//# sourceMappingURL=paciente.entity.js.map