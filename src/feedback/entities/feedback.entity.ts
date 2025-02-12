import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Feedback {
          @PrimaryGeneratedColumn()
           id: string
        
           @Column()
           name: string
        
           @Column()
           email: string
        
           @Column()
           message: string
        
           @Column()
           rating: string
    
}
