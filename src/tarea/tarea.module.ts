import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';

@Module({
  controllers: [TareaController]
})
export class TareaModule {}
