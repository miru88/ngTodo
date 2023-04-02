import {IsString,IsBoolean, IsNumber,IsOptional} from 'class-validator';

export class UpdateTodoDTO{

    @IsBoolean()
    @IsOptional()
    done: boolean;

    @IsString()
    @IsOptional()
    message: string;

}