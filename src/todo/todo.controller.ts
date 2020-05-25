import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';
import { CreateTodoDto } from './create-todo.dto'


@Controller('/todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto): Promise<any>{
        return await this.todoService.create(createTodoDto);
    }

    @Get()
    async findAll(): Promise<Todo[]>{
        return await this.todoService.findAll();
    }

    @Put()
    async update(@Body('id') id: string, @Body('desc') desc: string): Promise<any>{
        return await this.todoService.update(id, desc);
    }

    @Delete()
    async delete(@Body('id') id:string): Promise<any>{
        return await this.todoService.delete(id);
    }
}