import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserMedicoDto } from './dto/create-medico.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & Users>;
    createMedico(createMedicoDto: CreateUserMedicoDto): Promise<CreateUserMedicoDto & Users>;
    findOneByEmail(email: string): Promise<Users>;
    findOneByEmailWithPassword(email: string): Promise<Users>;
    findAll(): Promise<Users[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
