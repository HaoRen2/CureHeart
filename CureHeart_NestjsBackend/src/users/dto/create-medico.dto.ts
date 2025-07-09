import { RoleEnums } from "src/common/enums/rol.enum";


export class CreateUserMedicoDto {

    email: string;

    password: string;

    role: RoleEnums

    
}