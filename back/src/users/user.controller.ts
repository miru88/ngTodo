import {Body, Controller, Get, Post, Delete, Param, Patch } from "@nestjs/common";
import {UserService} from './user.service';
import {CreatUserDTO} from "src/dtos/create-user.dto";
import {UpdateUserDTO} from 'src/dtos/update-user.dto';
@Controller('/user')
export class UserController{
    constructor(private readonly userService: UserService){}


    @Get()
    findAll(){
        console.log('sent all users');
        return this.userService.findAll();
    }

    @Post('/create')
    createUser(@Body() body: CreatUserDTO){
        return this.userService.createUser(body.firstname,
                                            body.lastname,
                                            body.username,
                                            body.password);
    }

    @Get('/:id')
    findUser(@Param('id') id: number){
        console.log('sent one user');
        return this.userService.findOne(id);
    }

    @Delete('/:id')
    removeUser(@Param('id') id: number){
        return this.userService.removeUser(id);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: number, @Body() body: UpdateUserDTO){
        this.userService.updateUser(id,body);
    }
}