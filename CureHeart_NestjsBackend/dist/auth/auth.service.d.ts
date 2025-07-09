import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterMedicoDto } from './dto/registerMedico.dto';
import { RoleEnums } from 'src/common/enums/rol.enum';
import { UpdateDto } from './dto/update.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ email, password }: RegisterDto): Promise<{
        token: string;
        email: string;
        role: RoleEnums;
    }>;
    registerMedico({ email, password }: RegisterMedicoDto): Promise<{
        id: number;
        token: string;
        email: string;
        role: RoleEnums;
    }>;
    login({ email, password }: LoginDto): Promise<{
        token: string;
        email: string;
        role: RoleEnums;
    }>;
    cambiarPassword(updateDto: UpdateDto, email: string): Promise<import("typeorm").UpdateResult>;
    profile({ email, role }: {
        email: string;
        role: string;
    }): Promise<import("../users/entities/user.entity").Users>;
}
