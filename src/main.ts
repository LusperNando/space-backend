import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/uploads', express.static(join(__dirname, '..', '..', 'uploads')));

  app.enableCors({
    origin: 'https://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
