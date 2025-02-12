import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
   @PrimaryGeneratedColumn()
   id: string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   phone: string

   @Column({default: 'user'})
   role: string

   @Column()
   password: string

}
