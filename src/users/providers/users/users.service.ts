import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/users/DTO/users.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)    
        private user: Repository<UserEntity>){}

    async getAllUsers(){
        return await this.user.find({relations: ['tarea']});
    }

    async getOne(id: any){
        return await this.user.findOne(id);
      }

    async createUser(userNuevo: UserDto){
        const newUser = new UserEntity();
        newUser.nombre = userNuevo.nombre;
        newUser.apellido = userNuevo.apellido;
        newUser.email = userNuevo.email;
        newUser.password = userNuevo.password;

        this.user.save(newUser)
    }

    async updateUser(id: any, editUser: UserDto){
        const updateUser = await this.user.findOne({id: id});
        updateUser.nombre = editUser.nombre;
        updateUser.apellido = editUser.apellido;
        updateUser.email = editUser.email;
        updateUser.password = editUser.password;

        return this.user.update(id,updateUser);
    }

    async deleteUser(idUser: any){
        return this.user.delete(idUser);
    }
}
