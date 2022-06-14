import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CrearTarea } from './DTO/crear-tarea';
import { TareaService } from './providers/tarea/tarea.service';

@Controller('tarea')
export class TareaController {
    constructor(private TS: TareaService) { }
    @Get()
    getHomeworks(): any {
        const rows = this.TS.getAllTarea();
        return rows;
    }

    @Get(':id')
    getOneHomework(@Param('id') id: any): any {
        const rows = this.TS.getOne(id);
        return rows;
    }

    @Post()
    createHomework(@Body() homework: CrearTarea) {
        this.TS.createTarea(homework);
        return 'Creando Tarea';
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: CrearTarea) {
        this.TS.updateTarea(id, updBody);
        return `Actualizando Tarea con ID: ${id}`;
    }

    @Delete(':id')
    deleteHomework(@Param('id') id: string) {
        this.TS.deleteTarea(id);
        return `Tarea eliminada con el ID: ${id}`;
    }
}
