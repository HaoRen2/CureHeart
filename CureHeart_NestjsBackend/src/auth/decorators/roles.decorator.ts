import { SetMetadata } from '@nestjs/common';
import { RoleEnums } from '../../common/enums/rol.enum';

//SetMetaData permite crear tu decorador personalizado de formque puedes pasar los parametros
//Esto lo utiliza para proteger las rutas que si no tiene un role especifico de puedes acceder

export  const ROLES_KEY = 'roles';
export const Roles = (role: RoleEnums) => SetMetadata(ROLES_KEY,role);