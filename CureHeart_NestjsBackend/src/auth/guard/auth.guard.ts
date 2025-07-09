import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../constants/jwt.constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService){}

  async canActivate(context: ExecutionContext,):  Promise<boolean>  {


    const request = context.switchToHttp().getRequest();

    const token = this.extrackTokenFromHeader(request);
    if (!token){
      throw new UnauthorizedException();
    }

    // Comprobar si el token es valido
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
      request['user'] = payload;
    }catch{
      throw new UnauthorizedException();
    }

    return true;

    
  }

  private extrackTokenFromHeader(request: Request): string | undefined{
    //Destructuracion si a mandado consa en el authorization pues se
    //destruectura en tipo y su token sino no hay nada volvemos un array
    // vacio
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    //Si el tipo es Bearer volvemos el token sino un undefined
    return type === 'Bearer' ? token: undefined
  }
}
