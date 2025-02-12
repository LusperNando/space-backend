import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Internship {
        @PrimaryGeneratedColumn()
        id: string
    
        @Column()
        title: string
    
        @Column()
        description: string
    
        @Column()
        date: Date
    
        @Column({ nullable: true }) 
        imageurl: string;
    }

