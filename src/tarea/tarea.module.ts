import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './providers/tarea/tarea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './entities/tarea.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity,UserEntity]),],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
