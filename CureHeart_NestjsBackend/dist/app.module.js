"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const paciente_module_1 = require("./paciente/paciente.module");
const typeorm_1 = require("@nestjs/typeorm");
const medico_module_1 = require("./medico/medico.module");
const citas_module_1 = require("./citas/citas.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const medicamento_module_1 = require("./medicamento/medicamento.module");
const dietas_med_module_1 = require("./dietas-med/dietas-med.module");
const informe_module_1 = require("./informe/informe.module");
const horario_medico_module_1 = require("./horario-medico/horario-medico.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3307,
                username: 'lei',
                password: 'root',
                database: 'db_hospital',
                autoLoadEntities: true,
                synchronize: true,
            }),
            paciente_module_1.PacienteModule,
            medico_module_1.MedicoModule,
            citas_module_1.CitasModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            medicamento_module_1.MedicamentoModule,
            dietas_med_module_1.DietasMedModule,
            informe_module_1.InformeModule,
            horario_medico_module_1.HorarioMedicoModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map