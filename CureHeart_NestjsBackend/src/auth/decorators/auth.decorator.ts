import { RoleEnums } from '../../common/enums/rol.enum';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';

//Estos lo utiliza para juntar diferentes decoratores
export function Auth(role: RoleEnums){
  return applyDecorators(
    Roles(role),
    UseGuards(AuthGuard, RolesGuard)
  )
}