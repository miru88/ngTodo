import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    createUser(firstname:string,
        lastname:string,
        username:string,
        password:string){
        const user = this.userRepository.create({firstname,lastname,username,password});
        return this.userRepository.save(user);
    }

    findOne(id: number) {
        return this.userRepository.findOneBy({id});
    }

    async removeUser(id:number) {
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new Error('user not found')
        }

        return this.userRepository.remove(user);
    }

    async updateUser(id: number, attrs: Partial<User>){
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new Error("user not found");
        }
        Object.assign(user,attrs);

        return this.userRepository.save(user);
    }
}
