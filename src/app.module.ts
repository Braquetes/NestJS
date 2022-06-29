import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categoria.module';
import { TareaModule } from './tarea/tarea.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TareaModule,
    UsersModule,
    CategoriaModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
