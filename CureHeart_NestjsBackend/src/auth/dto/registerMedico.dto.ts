import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { RoleEnums } from "src/common/enums/rol.enum";


export class RegisterMedicoDto {

    @IsEmail()
    email: string;

    // Transform para que no pone espacio
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    role: RoleEnums
}