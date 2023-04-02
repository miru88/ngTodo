import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    createddate: Date;

    @Column()
    username: string;

    @Column()
    password: string;
    
}