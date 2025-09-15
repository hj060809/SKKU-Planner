import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(process.env.CLIENT_PORT ?? 4000);
}
bootstrap();
