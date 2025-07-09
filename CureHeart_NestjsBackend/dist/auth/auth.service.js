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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcryptjs = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const rol_enum_1 = require("../common/enums/rol.enum");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register({ email, password }) {
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            throw new common_1.BadRequestException('User already exists');
        }
        await this.usersService.create({
            email,
            password: await bcryptjs.hash(password, 10),
        });
        const user2 = await this.usersService.findOneByEmail(email);
        const role = user2.role;
        const payload = { email: user2.email, role: user2.role };
        const token = await this.jwtService.signAsync(payload);
        return {
            token,
            email,
            role
        };
    }
    async registerMedico({ email, password }) {
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            throw new common_1.BadRequestException('User already exists');
        }
        await this.usersService.createMedico({
            email,
            password: await bcryptjs.hash(password, 10),
            role: rol_enum_1.RoleEnums.MEDICO
        });
        const user2 = await this.usersService.findOneByEmail(email);
        const id = user2.id;
        const role = user2.role;
        const payload = { email: user2.email, role: user2.role };
        const token = await this.jwtService.signAsync(payload);
        return {
            id,
            token,
            email,
            role
        };
    }
    async login({ email, password }) {
        const user = await this.usersService.findOneByEmailWithPassword(email);
        if (!user) {
            throw new common_1.UnauthorizedException('email or password is wrong');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('email or password is wrong');
        }
        const payload = { email: user.email, role: user.role };
        const role = user.role;
        const token = await this.jwtService.signAsync(payload);
        return {
            token,
            email,
            role
        };
    }
    async cambiarPassword(updateDto, email) {
        const user = await this.usersService.findOneByEmailWithPassword(email);
        if (user) {
            updateDto.password = updateDto.password.toString();
            updateDto.password = await bcryptjs.hash(updateDto.password, 10);
            return await this.usersService.update(user.id, updateDto);
        }
    }
    async profile({ email, role }) {
        return await this.usersService.findOneByEmail(email);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map