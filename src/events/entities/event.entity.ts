import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    date: string

    @Column({ nullable: true }) 
    imageurl: string;
}