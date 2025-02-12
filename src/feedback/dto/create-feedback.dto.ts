import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateFeedbackDto {
              @IsNotEmpty()
              @IsString()
               name: string
            
              @IsNotEmpty()
              @IsString()
               email: string
            
              @IsNotEmpty()
              @IsString()
              message: string
            
              @IsNotEmpty()
              @IsOptional()
              rating: string
}
