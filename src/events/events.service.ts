import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
      constructor(
        @InjectRepository(Event)
         private readonly eventRepository: Repository<Event>,
      ){}

        async createEvent(createEventDto: CreateEventDto): Promise<Event> {
        const event = this.eventRepository.create(createEventDto);
        return this.eventRepository.save(event);
      }
    async getAllEvents(): Promise<Event[]>{
    return await this.eventRepository.find()
   }
 
}
