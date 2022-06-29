import { TareaEntity } from "src/tarea/entities/tarea.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class CategoriaEntity {
    newCategoria: CategoriaEntity;
    static findOneBy(arg0: { relations: string[]; }) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @OneToMany(() => TareaEntity, tarea => tarea.categoria)
    tarea: TareaEntity[];
}