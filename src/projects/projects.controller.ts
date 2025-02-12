import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './projects.service';
import { Project } from './entities/project.entity';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

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
    }),
  )
  async create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<Project> {
    if (image) {
      createProjectDto.imageurl = `uploads/${image.filename}`;
    }
    return this.projectService.createProject(createProjectDto);
  }

  @Get()
  getAllProjects() {
    return this.projectService.getAllProjects();
  }

  @Get('/:id') 
  async getProjectById(@Param('id') id: number): Promise<Project> {
    const project = await this.projectService.getProjectById(id);
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }
}