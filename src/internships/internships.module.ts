import { Module } from '@nestjs/common';
import { InternshipsService } from './internships.service';
import { InternshipsController } from './internships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Internship } from './entities/internship.entity';

@Module({
  imports:[
       TypeOrmModule.forFeature([Internship])
    ],
  controllers: [InternshipsController],
  providers: [InternshipsService],
})
export class InternshipsModule {}
