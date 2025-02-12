import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from 'typeOrm.config';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { InternshipsModule } from './internships/internships.module';
import { InternshipApplicationModule } from './internship-application/internship-application.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    EventsModule,
    
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', 
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          cb(null, `${uniqueSuffix}${file.originalname}`);
        },
      }),
    }),
    UserModule,
    AuthModule,
    InternshipsModule,
    InternshipApplicationModule,
    FeedbackModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
