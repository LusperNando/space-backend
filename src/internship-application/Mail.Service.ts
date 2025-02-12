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
  async sendApplicationEmail(formData:any,
    file:Express.Multer.File
  ){
    const {name, phone, email, college, degree,Duration, Reason_For_Applying, Reason_For_Work, Experience} = formData;
    const mailOptions ={
      from: '"Hb space"bsc-com-04-21@unima.ac.mw',
      to: 'hbspacelt@gmail.com',
      subject:`New internship Application from ${name}`,
      text: `You have received a new internship application.
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      College: ${college}
      Degree: ${degree}
      Duration: ${Duration}
      Reason for applying for internship: ${Reason_For_Applying}
      Reason for working with us: ${Reason_For_Work}
      Experience: ${Experience}`,
      attachments:[
        {
          filename:
       file.originalname,
            content: file.buffer,
        },
      ],

    };
    await this.transporter.sendMail(mailOptions);
  }

}
