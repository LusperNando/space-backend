import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProjectDto {
           @IsNotEmpty()
           @IsString()
            title: string
        
            @IsNotEmpty()
            @IsString()
            description: string
        
            @IsNotEmpty()
            @IsString()
            price: string
        
            @IsNotEmpty()
            @IsOptional()
            imageurl: string;
}
