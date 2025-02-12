import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

Entity('Application');
export class Application {
       @PrimaryGeneratedColumn()
       id: string
    
       @Column()
       name: string
    
       @Column()
       email: string
    
       @Column()
       phone: string
    
       @Column()
       college: string
    
       @Column()
       degree: string

       @Column()
       Duration: string

       @Column()
       Reason_For_Applying: string

       @Column()
       Reason_For_Work: string

       @Column()
       Experience: string

       @Column()
       Resume: string
    
}
