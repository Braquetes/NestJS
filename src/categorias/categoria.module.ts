import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from 'src/tarea/entities/tarea.entity';
import { CategoriaController } from './categoria.controller';
import { CategoriaEntity } from './entities/categoria.entity';
import { CategoriasService } from './providers/categorias/categorias.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntity,TareaEntity]),],
  controllers: [CategoriaController],
  providers: [CategoriasService]
})
export class CategoriaModule {}
