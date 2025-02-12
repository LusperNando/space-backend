import { Controller, Get, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; 
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { InternshipsService } from './internships.service';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { Internship } from './entities/internship.entity';

@Controller('Internship')
export class InternshipsController {
  constructor(private readonly InternshipService: InternshipsService) {}

  @Post('/uploads')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads', 
        filename: (req, file, cb) => {
          const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    })
  )
  async create(
    @Body() createInternshipDto: CreateInternshipDto,
    @UploadedFile() image: Express.Multer.File
  ): Promise<Internship> {
    if (image) {
      createInternshipDto.imageurl = `uploads/${image.filename}`;
    }
    return this.InternshipService.createInternship(createInternshipDto);
  }

  @Get()
  getAllInternship() {
    return this.InternshipService.getAllInternship();
  }
}
