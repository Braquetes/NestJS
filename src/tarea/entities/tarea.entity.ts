import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Tarea{
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
}