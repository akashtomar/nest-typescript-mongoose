import { Injectable, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.schema';


@Injectable()
export class TodoService{
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>){}

    async create(createTodoDto: CreateTodoDto): Promise<Todo>{
        let createdTodo = new this.todoModel(createTodoDto);
        return await createdTodo.save();
    }

    async findAll(): Promise<Todo[]>{
        return await this.todoModel.find().exec();
    }

    async update(id: string, desc: string): Promise<any>{
        return await this.todoModel.updateOne({'_id': id}, {$set: {'desc': desc}});
    }

    async delete(id: string): Promise<any>{
        return await this.todoModel.deleteOne({'_id': id});
    }
}