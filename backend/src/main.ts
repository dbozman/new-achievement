import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // The Bouncer: explicitly allowing your Angular frontend
  app.enableCors({
    origin: [
      'http://localhost:4200', 
      'https://new-achievement-ui-production.up.railway.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Railway requires process.env.PORT, otherwise it crashes internally
  await app.listen(process.env.PORT || 3000);
}
bootstrap();