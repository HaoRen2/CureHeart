import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RoleEnums } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';
import { RegisterMedicoDto } from './dto/registerMedico.dto';
import { UpdateDto } from './dto/update.dto';

// Es una ayuda para el usuario para que no realiza los acciones directamente a la ruta de los users que aquí se realiza login, register y cambio de password
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post('register')
    register(
        @Body() 
        registerDto: RegisterDto
    ){
        return this.authService.register(registerDto)
    }

    @Post('register-medico')
    registerMedico(
        @Body() 
        registerDto: RegisterMedicoDto
    ){
        return this.authService.registerMedico(registerDto)
    }


    @Post('login')
    login(
        @Body()
        loginDto: LoginDto
    ){
        return this.authService.login(loginDto)
    }

    @Get('profile')
    @Auth(RoleEnums.ADMIN)
    profile(@ActiveUser() user: UserActiveInterface){
        return this.authService.profile(user)
    }

    @Patch('email/:correo')
    update(@Param('correo') correo: string, @Body() updatePacienteDto: UpdateDto) {
    return this.authService.cambiarPassword(updatePacienteDto, correo);
  }
}
