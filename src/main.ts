import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // ✅ Fix Network Error

  await app.listen(5000); // ✅ Match your frontend API URL
}
bootstrap();
