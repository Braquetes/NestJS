import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()


export class TareaEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre:string;
    @Column()
    descripcion: string;
    @Column()
    fecha: string;
    @Column()
    tipo: number;
    @ManyToOne(()=>UserEntity,user=>user.tarea)
    user: UserEntity;
}
