import { Controller, Get, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Event } from './entities/event.entity'; 
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('/create')
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
    @Body() createEventDto: CreateEventDto,
    @UploadedFile() image: Express.Multer.File
  ): Promise<Event> {
    if (image) {
      createEventDto.imageurl = `uploads/${image.filename}`;
    }
    return this.eventsService.createEvent(createEventDto);
  }

  @Get()
  getAllEvents() {
    return this.eventsService.getAllEvents();
  }
}
