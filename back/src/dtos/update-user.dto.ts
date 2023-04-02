import {IsString, IsNumber,IsOptional} from 'class-validator';

export class UpdateUserDTO {
    @IsString()
    @IsOptional()
    firstname: string;

    @IsString()
    @IsOptional()
    lastname: string;

    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    password: string;

    
}