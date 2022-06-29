import { UserEntity } from 'src/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearTarea } from 'src/tarea/DTO/crear-tarea';
import { TareaEntity } from 'src/tarea/entities/tarea.entity';
import { Repository } from 'typeorm';
import { CategoriaEntity } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class TareaService {
    constructor(
        @InjectRepository(TareaEntity)    
        private tarea: Repository<TareaEntity>,
        @InjectRepository(UserEntity)
        private user: Repository<UserEntity>,
        @InjectRepository(CategoriaEntity)
        private categoria: Repository<CategoriaEntity>){}

    async getAllTarea(){
        return await this.tarea.find();
    }

    async getOne(id: any){
        return await this.tarea.findOne({relations: ['user'], where: {id:id}});
    }

    async createTarea(tareaNueva: CrearTarea){
        const newTarea = new TareaEntity();
        const users = await this.user.findOne({ id: tareaNueva.userId });
        newTarea.user = users;
        const categoria = await this.categoria.findOne({ id: tareaNueva.categoriaId });
        newTarea.categoria = categoria;
        newTarea.nombre = tareaNueva.nombre;
        newTarea.descripcion = tareaNueva.descripcion;
        newTarea.fecha = tareaNueva.fecha;
        newTarea.tipo = tareaNueva.tipo;

        this.tarea.save(newTarea)
    }

    async updateTarea(id: any, editTarea: CrearTarea){
        const updateTarea = await this.tarea.findOne();
        updateTarea.nombre = editTarea.nombre;
        updateTarea.descripcion = editTarea.descripcion;
        updateTarea.fecha = editTarea.fecha;
        updateTarea.tipo = editTarea.tipo;

        return this.tarea.update(id,updateTarea);
    }

    async deleteTarea(idTarea: any){
        return this.tarea.delete(idTarea);
    }
}
