import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { RoleEnums } from '../../common/enums/rol.enum';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {
  }

  //Reflactor lo utiliza para acceder a los metados
  canActivate(
    context: ExecutionContext,
  ): boolean  {

    const roles = this.reflector.getAllAndOverride<RoleEnums>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if (!roles){
      return true
    }


    const { user } = context.switchToHttp().getRequest();

    if (user.role === RoleEnums.ADMIN){
      return true;
    }

    return roles === user.role;
  }
}
