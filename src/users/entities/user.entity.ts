import { TareaEntity } from "src/tarea/entities/tarea.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class UserEntity {
    static findOneBy(arg0: { relations: string[]; }) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @OneToMany(() => TareaEntity, tarea => tarea.user)
    tarea: TareaEntity[];
}