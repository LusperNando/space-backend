import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Project {
        @PrimaryGeneratedColumn()
        id: number
    
        @Column()
        title: string
    
        @Column()
        description: string
    
        @Column()
        price: string
    
        @Column({ nullable: true }) 
        imageurl: string;
}
