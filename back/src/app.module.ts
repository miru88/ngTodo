import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import {TodoService} from './todo/todo.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Todo} from './todo/todo.entity';
import {User} from './users/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule,
    TodoModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'root',
    database: 'ree',
    entities: [User,Todo],
    synchronize: false,
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
