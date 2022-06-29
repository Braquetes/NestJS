import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './providers/tarea/tarea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './entities/tarea.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { CategoriaEntity } from 'src/categorias/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity,UserEntity,CategoriaEntity]),],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
