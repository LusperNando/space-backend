import { Injectable } from '@nestjs/common';
import { CreateInternshipDto } from './dto/create-internship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Internship } from './entities/internship.entity';
import { Repository } from 'typeorm';


@Injectable()
export class InternshipsService{
      constructor(
        @InjectRepository(Internship)
         private readonly InternshipRepository: Repository<Internship>,
        ){}

async createInternship(data: CreateInternshipDto){
 const event = this.InternshipRepository.create(data)
 
 return await this.InternshipRepository.save(event)
}
async getAllInternship(): Promise<Internship[]>{
    return await this.InternshipRepository.find()
}
 
}