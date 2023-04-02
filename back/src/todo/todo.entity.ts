import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name:"todos"})
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @Column()
    createddate: Date;

    @Column()
    userid: number;

    
}