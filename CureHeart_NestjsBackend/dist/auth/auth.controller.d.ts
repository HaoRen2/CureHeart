import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RoleEnums } from '../common/enums/rol.enum';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';
import { RegisterMedicoDto } from './dto/registerMedico.dto';
import { UpdateDto } from './dto/update.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        token: string;
        email: string;
        role: RoleEnums;
    }>;
    registerMedico(registerDto: RegisterMedicoDto): Promise<{
        id: number;
        token: string;
        email: string;
        role: RoleEnums;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
        role: RoleEnums;
    }>;
    profile(user: UserActiveInterface): Promise<import("../users/entities/user.entity").Users>;
    update(correo: string, updatePacienteDto: UpdateDto): Promise<import("typeorm").UpdateResult>;
}
