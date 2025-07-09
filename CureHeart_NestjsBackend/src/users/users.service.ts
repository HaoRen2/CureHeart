import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserMedicoDto } from './dto/create-medico.dto';
import { RoleEnums } from 'src/common/enums/rol.enum';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  createMedico(createMedicoDto: CreateUserMedicoDto){
    createMedicoDto.role = RoleEnums.MEDICO;
    return this.userRepository.save(createMedicoDto);
  }

  findOneByEmail(email: string){
    return this.userRepository.findOneBy({ email })
  }

  findOneByEmailWithPassword(email: string){
    return this.userRepository.findOne(
      {where: { email },
        select: ['id','email', 'password','role']
      }
    )
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id,updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
