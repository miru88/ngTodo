import {IsString, IsNumber} from 'class-validator'

export class CreatUserDTO{
    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsString()
    username: string;

    @IsString()
    password: string;


}