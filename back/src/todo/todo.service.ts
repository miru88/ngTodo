import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Todo} from './todo.entity'


@Injectable()
export class TodoService{
   constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}

    findAll(): Promise<Todo[]>{
        return this.todoRepository.find();
    }

    async findUserTodos(id:number): Promise<Todo[]>{
        return await this.todoRepository.find({
            where: {
                userid: id
            }
        });
    }

    createTodo(message: string, userid: number){
        const todo = this.todoRepository.create({message,userid});
        return this.todoRepository.save(todo);
    }

    async updateTodo(id: number, attrs: Partial<Todo>){
        const todo = await this.todoRepository.findOneBy({id});
        if(!todo){
            throw new Error("No such todo");
        }
        Object.assign(todo,attrs)
        return this.todoRepository.save(todo);
    }
}