
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateInternshipApplicationDto {
    
           @IsNotEmpty()
           @IsString()
           name: string
        
           @IsNotEmpty()
           @IsString()
           email: string
        
           @IsNotEmpty()
           @IsString()
           phone: string
        
           @IsNotEmpty()
           @IsString()
           college: string
        
           @IsNotEmpty()
           @IsString()
           degree: string
    
           @IsNotEmpty()
           @IsString()
           Duration: string
    
           @IsNotEmpty()
           @IsString()
           Reason_For_Applying: string
    
           @IsNotEmpty()
           @IsString()
           Reason_For_Work: string
    
           @IsNotEmpty()
           @IsString()
           Experience: string
    
           @IsNotEmpty()
           @IsOptional()
           Resume: string
}
