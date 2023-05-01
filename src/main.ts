import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Prueba Técnica René Hormazábal')
    .setDescription('Prueba técnica SharfsteinLabs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app,swaggerConfig);

  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(3000);
}
bootstrap();
