import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
      constructor(
        @InjectRepository(Project)
         private readonly projectRepository: Repository<Project>,
      ){}

        async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
        const data = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(data);
      }
    async getAllProjects(): Promise<Project[]>{
    return await this.projectRepository.find()
   }
   async getProjectById(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }
 
}
