import { InjectRepository } from '@nestjs/typeorm';
import { CrearTarea } from 'src/tarea/DTO/crear-tarea';
import { Tarea } from 'src/tarea/entities/tarea.entity';
import { Repository } from 'typeorm';

export class TareaService {
    constructor(
        @InjectRepository(Tarea)
        private tarea: Repository<Tarea>){}

    async getAllTarea(){
        return await this.tarea.find;
    }

    async CrearTarea(tareaNueva: CrearTarea){
        const newTarea = new Tarea();
        newTarea.nombre = tareaNueva.nombre;
        newTarea.descripcion = tareaNueva.descripcion;
        newTarea.fecha = tareaNueva.fecha;
        newTarea.tipo = tareaNueva.tipo;

        this.tarea.save(newTarea)
    }
}