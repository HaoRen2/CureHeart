"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInformeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_informe_dto_1 = require("./create-informe.dto");
class UpdateInformeDto extends (0, mapped_types_1.PartialType)(create_informe_dto_1.CreateInformeDto) {
}
exports.UpdateInformeDto = UpdateInformeDto;
//# sourceMappingURL=update-informe.dto.js.map