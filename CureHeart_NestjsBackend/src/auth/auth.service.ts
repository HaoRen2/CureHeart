import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';


import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterMedicoDto } from './dto/registerMedico.dto';
import { RoleEnums } from 'src/common/enums/rol.enum';
import { UpdateDto } from './dto/update.dto';

// Es una ayuda para el usuario para que no realiza los acciones directamente a la ruta de los users que aquí se realiza login, register y cambio de password
// El password se encripta por bcryptjs
// Payload parte de informacion que se para crear el json web token


@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async register({email, password}: RegisterDto){

        const user = await this.usersService.findOneByEmail(email);

        if (user){
            throw new BadRequestException('User already exists')
        }

          await this.usersService.create(
            {
                email,
                password: await bcryptjs.hash(password, 10),
            }
            )
      const user2 = await this.usersService.findOneByEmail(email);      
      const role = user2.role
      const payload = { email: user2.email, role: user2.role };
      const token = await this.jwtService.signAsync(payload);
        return{
            token,
            email,
            role
        }
    }

    async registerMedico({email, password}: RegisterMedicoDto){

        const user = await this.usersService.findOneByEmail(email);

        if (user){
            throw new BadRequestException('User already exists')
        }

          await this.usersService.createMedico(
            {
                email,
                password: await bcryptjs.hash(password, 10),
                role: RoleEnums.MEDICO
            }
            )

    const user2 = await this.usersService.findOneByEmail(email);
    const id = user2.id
    const role = user2.role
    const payload = { email: user2.email, role: user2.role };

      const token = await this.jwtService.signAsync(payload);

        return{
            id,
            token,
            email,
            role
        }
    }

    async login({email, password}: LoginDto){
        const user = await this.usersService.findOneByEmailWithPassword(email);
        if(!user){
            throw new UnauthorizedException('email or password is wrong')
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if(!isPasswordValid){
            throw new UnauthorizedException('email or password is wrong')
        }

        const payload = { email: user.email, role: user.role };
        const role = user.role
        const token = await this.jwtService.signAsync(payload);
        
        return {
            token,
            email,
            role
        }

    }

    async cambiarPassword(updateDto: UpdateDto, email: string){
        const user = await this.usersService.findOneByEmailWithPassword(email);
        if(user){
        updateDto.password = updateDto.password.toString();
         updateDto.password = await bcryptjs.hash(updateDto.password, 10);

        return await this.usersService.update(user.id,updateDto);
        }
        

    }

    async profile({email, role} : {email:string; role: string}){
       /* if (role == 'admin'){
            throw new UnauthorizedException(
              'You are not allow to use this enpind'
            )
        }*/
            return await this.usersService.findOneByEmail(email)
    }
}

