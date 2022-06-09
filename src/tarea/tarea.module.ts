import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './services/tarea/tarea.service';

@Module({
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
