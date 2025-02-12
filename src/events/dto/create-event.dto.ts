import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEventDto {

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    date: string

    @IsString()
    @IsOptional()
    imageurl: string;
}
