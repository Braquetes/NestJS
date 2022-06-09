import { Tarea } from './tarea/entities/tarea.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tarea/tarea.module';
import { TareaService } from './tarea/services/tarea/tarea.service';

@Module({
  imports: [
    TareaModule,
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
    Tarea
  ],
  controllers: [AppController],
  providers: [AppService, TareaService],
})
export class AppModule {}
