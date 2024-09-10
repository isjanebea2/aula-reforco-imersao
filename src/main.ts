import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService)

  const APP_PORT = configService.get<number>('PORT', 3000)

  await app.listen(APP_PORT);

  console.log('App rodando na porta: '+ APP_PORT)
}
bootstrap();
