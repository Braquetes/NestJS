import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './providers/users/users.service';
import { TareaEntity } from '../tarea/entities/tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,TareaEntity]),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
