import {Module} from '@nestjs/common';
import {TodoService} from './todo.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Todo} from './todo.entity';
import {TodoController} from './todo.controller';

@Module({
    providers: [TodoService],
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodoController],
})
export class TodoModule {}