import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
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
    @IsOptional()
    role: string

    @IsNotEmpty()
    @IsString()
    password: string
}
