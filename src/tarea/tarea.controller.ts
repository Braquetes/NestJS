import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CrearTarea } from './DTO/crear-tarea';
import { TareaService } from './providers/tarea/tarea.service';

@Controller('tarea')
export class TareaController {
    constructor(private TS: TareaService){}
    @Get()
    getHomeworks(): string {
        // this.TS.getAllTarea();
        return 'Todas las tareas';
    }

    @Get(':id')
    getOneHomework(@Param('id') id: string):string {
        return `Tarea con ID: ${id}`; 
    }

    @Post()
    createHomework(@Body() homework: CrearTarea){
        return this.TS.createTarea(homework);
        // return 'Creando Tarea';
    }

    @Put(':id')
    UpdateHomework(@Param('id') id:string, @Body() updBody: CrearTarea){
        return `Actualizando Tarea con ID: ${id}`;
    }

    @Delete(':id')
    deleteHomework(@Param('id') id:string){
        return `Eliminando Tarea con ID: ${id}`;
    }
}
