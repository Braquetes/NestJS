import { CategoriasService } from './providers/categorias/categorias.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriaDto } from './DTO/categoria.dto';


@Controller('categoria')
export class CategoriaController {
    constructor(private CS: CategoriasService) { }
    @Get()
    getHomeworks(): any {
        const rows = this.CS.getAllCategorias();
        return rows;
    }

    @Get(':id')
    getOneHomework(@Param('id') id: any): any {
        const rows = this.CS.getOne(id);
        return rows;
    }

    @Post()
    createHomework(@Body() homework: CategoriaDto) {
        this.CS.createCategoria(homework);
        // return 'Creando User';
        return `{"message": "Correct"}`;
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: CategoriaDto) {
        this.CS.updateCategoria(id, updBody);
        // return `Actualizando User con ID: ${id}`;
        return `{"message": "Correct"}`;
    }

    @Delete(':id')
    deleteHomework(@Param('id') id: string) {
        this.CS.deleteCategoria(id);
        // return `User eliminado con el ID: ${id}`;
        return `{"message": "Correct"}`;
    }
}
