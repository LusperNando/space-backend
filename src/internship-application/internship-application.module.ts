import { Module } from '@nestjs/common';
import { InternshipApplicationController } from './internship-application.controller';
import { MailService } from './Mail.Service';

@Module({
  controllers: [InternshipApplicationController],
  providers: [MailService],
})
export class InternshipApplicationModule {}
