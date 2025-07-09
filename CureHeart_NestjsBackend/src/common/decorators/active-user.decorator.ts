import { ExecutionContext, createParamDecorator } from "@nestjs/common";

//Decorador personalizado que nos permite obtener el usuario activo en el controlador
export const ActiveUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);