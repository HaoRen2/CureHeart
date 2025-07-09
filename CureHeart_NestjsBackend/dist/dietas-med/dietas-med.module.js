"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietasMedModule = void 0;
const common_1 = require("@nestjs/common");
const dietas_med_service_1 = require("./dietas-med.service");
const dietas_med_controller_1 = require("./dietas-med.controller");
const dietas_med_entity_1 = require("./entities/dietas-med.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DietasMedModule = class DietasMedModule {
};
exports.DietasMedModule = DietasMedModule;
exports.DietasMedModule = DietasMedModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dietas_med_entity_1.DietasMed])],
        controllers: [dietas_med_controller_1.DietasMedController],
        providers: [dietas_med_service_1.DietasMedService],
    })
], DietasMedModule);
//# sourceMappingURL=dietas-med.module.js.map