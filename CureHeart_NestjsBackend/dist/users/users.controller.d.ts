import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserMedicoDto } from './dto/create-medico.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").Users>;
    createMedico(createMedico: CreateUserMedicoDto): Promise<CreateUserMedicoDto & import("./entities/user.entity").Users>;
    findAll(): Promise<import("./entities/user.entity").Users[]>;
    findOneByEmail(email: string): Promise<import("./entities/user.entity").Users>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
