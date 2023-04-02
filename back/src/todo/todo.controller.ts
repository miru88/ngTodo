import {Body, Controller, Get,Param,Patch,Post,Query } from '@nestjs/common';
import { PostgresError } from 'postgres';
import {TodoService} from './todo.service';
import { CreateTodoDTO } from 'src/dtos/create-todo.dto';
import {UpdateTodoDTO} from 'src/dtos/update-todo.dto';
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Get()
    findAll(){
        return this.todoService.findAll();
    }

    @Get('/:id')
    getUserTodos(@Param('id') id:number){
        return this.todoService.findUserTodos(id);
    }

    @Post('create')
    createTodo(@Body() body: CreateTodoDTO){
        this.todoService.createTodo(body.message,body.userid);
        
    }

    @Patch('/:id')
    updateTodo(@Param('id') id: number, @Body() body: UpdateTodoDTO){
        this.todoService.updateTodo(id,body);
    }
}