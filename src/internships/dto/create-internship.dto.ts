import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateInternshipDto {
     
        @IsNotEmpty()
        @IsString()
        title: string
    
        @IsNotEmpty()
        @IsString()
        description: string
    
        @IsNotEmpty()
        date: Date
    
        @IsNotEmpty()
        @IsOptional()
        imageurl: string
    }
    

