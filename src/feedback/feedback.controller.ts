import { Controller, Get, Post, Body } from '@nestjs/common';
import { MailService } from './Mail.Service';


@Controller('feedback')
export class FeedbackController {
  constructor(private readonly mailService: MailService ) {}
  
  @Post('/submit')
  async send(
    @Body() formData: any,
  ) {
    try{
      await this.mailService.SendEmail(formData);
      return{ message: 'feedback submitted successfully'
      };
    }catch(error){
      console.error('Error submitting application:', error);
      throw new Error('Failed to submit application');
    }
  }
}
