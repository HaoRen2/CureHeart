import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Opcional que pone un global prefix
  app.setGlobalPrefix("api/v1");

  //Opcion para que se puede transmitir grandes archivos
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  //Configurar de forma globar los datos de entrada en el
  // que si los datos no corresponda se tira un error
  // 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // transforma automaticamente los tipos de variable
      // como entra string y cambia en number en base de daos
      transform: true
    })
  );


  await app.listen(3000);
}
bootstrap();
