import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './providers/users/users.service';

@Controller('user')
export class UsersController {
    constructor(private US: UsersService) { }
    @Get()
    getHomeworks(): any {
        const rows = this.US.getAllUsers();
        return rows;
    }

    @Get(':id')
    getOneHomework(@Param('id') id: any): any {
        const rows = this.US.getOne(id);
        return rows;
    }

    @Post('/login')
    login(@Body() login: any): any {
        const rows = this.US.login(login);
        return rows;
    }

    @Post()
    createHomework(@Body() homework: UserDto) {
        this.US.createUser(homework);
        // return 'Creando User';
        return `{"message": "Correct"}`;
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: UserDto) {
        this.US.updateUser(id, updBody);
        // return `Actualizando User con ID: ${id}`;
        return `{"message": "Correct"}`;
    }

    @Delete(':id')
    deleteHomework(@Param('id') id: string) {
        this.US.deleteUser(id);
        // return `User eliminado con el ID: ${id}`;
        return `{"message": "Correct"}`;
    }
}
