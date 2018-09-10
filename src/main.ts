import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const BASE_DIR = __dirname;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
