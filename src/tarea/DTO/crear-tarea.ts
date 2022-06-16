import { FindCondition } from "typeorm";

export class CrearTarea {
    nombre: string;
    descripcion: string;
    fecha: string;
    tipo: number;
    userId:  FindCondition<number>
}
