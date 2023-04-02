import {IsString, IsNumber} from 'class-validator'
export class CreateTodoDTO {
    @IsString()
    message: string;

    @IsNumber()
    userid: number;
}