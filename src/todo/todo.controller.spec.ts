import { TestingModule, Test } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.schema';
import { getModelToken } from '@nestjs/mongoose';



describe('TodoController', ()=>{
    let todo: TestingModule;

    beforeAll(async ()=>{
        todo = await Test.createTestingModule({
            controllers: [TodoController],
            providers: [{provide: getModelToken(Todo.name), useValue: CreateTodoDto},TodoService]
        }).compile();
    });
    
    describe('basic check', ()=>{
        it('constroller and service must be defined', ()=>{
            const todoController = todo.get<TodoController>(TodoController);
            const todoService = todo.get<TodoService>(TodoService);
            expect(todoController).toBeDefined();
            expect(todoService).toBeDefined();
        });
    })
})