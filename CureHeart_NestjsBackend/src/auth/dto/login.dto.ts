import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { RoleEnums } from '../../common/enums/rol.enum';


export class LoginDto {

    @IsEmail()
    email: string;

    // Transform -> value.trim() para que no pone espacio
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string

    @IsOptional()
    role: RoleEnums
}