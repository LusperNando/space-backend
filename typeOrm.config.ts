import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/user/entities/user.entity';
import { Internship } from 'src/internships/entities/internship.entity';
import { Application } from 'src/internship-application/entities/internship-application.entity';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { Project } from 'src/projects/entities/project.entity';

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type:'mysql',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [Event, User, Internship, Application, Feedback, Project], 
  synchronize: true,
  driver: require('mysql2'), 
});
