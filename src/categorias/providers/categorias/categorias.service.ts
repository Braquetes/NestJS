import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaDto } from '../../DTO/categoria.dto';
import { CategoriaEntity } from '../../entities/categoria.entity';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(CategoriaEntity)
        private categoria: Repository<CategoriaEntity>) { }

    async getAllCategorias() {
        return await this.categoria.find({ relations: ['tarea'] });
    }

    async getOne(id: any) {
        return await this.categoria.findOne({ relations: ['tarea'], where: { id: id } });
    }

    async createCategoria(categoriaNuevo: CategoriaDto) {
        const newCategoria = new CategoriaEntity();
        newCategoria.nombre =categoriaNuevo.nombre;
        newCategoria.descripcion = categoriaNuevo.descripcion;

        this.categoria.save(newCategoria)
    }

    async updateCategoria(id: any, editCategoria: CategoriaDto) {
        const updateCategoria = await this.categoria.findOne({ id: id });
        updateCategoria.nombre = editCategoria.nombre;
        updateCategoria.descripcion = editCategoria.descripcion;

        return this.categoria.update(id, updateCategoria);
    }

    async deleteCategoria(idCategoria: any) {
        return this.categoria.delete(idCategoria);
    }
}
