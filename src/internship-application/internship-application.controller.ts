import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MailService } from './Mail.Service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('application')
export class InternshipApplicationController {
  constructor(private readonly mailService: MailService ) {}
  
  @Post('/apply')
  @UseInterceptors(FileInterceptor('Resume'))
  async apply(
    @Body() formData: any,
    @UploadedFile() file: Express.Multer.File
  ) {
    try{
      await this.mailService.sendApplicationEmail(formData, file);
      return{ message: 'Application submitted successfully'
      };
    }catch(error){
      console.error('Error submitting application:', error);
      throw new Error('Failed to submit application');
    }
  }
}
