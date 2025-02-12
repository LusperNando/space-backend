import { Module } from '@nestjs/common';
import { MailService } from './Mail.Service';
import { FeedbackController } from './feedback.controller';

@Module({
  controllers: [FeedbackController],
  providers: [MailService],
})
export class FeedbackModule {}
