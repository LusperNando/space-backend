import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor(){
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'bsc-com-04-21@unima.ac.mw',
        pass: 'zbeg lvjf yrkb iqtb',
      },
    });
  }
  async SendEmail(formData:any,
  ){
    const {name, email, message, rating } = formData;
    const mailOptions ={
      from: '"Hb space, "bsc-com-04-21@unima.ac.mw',
      to: 'hbspacelt@gmail.com',
      subject:`Feedback from ${name}`,
      text: `You have received a new feedback.
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Ratings: ${rating}`,
    };
    await this.transporter.sendMail(mailOptions);
  }

}
